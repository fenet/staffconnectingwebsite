import "dotenv/config";
import crypto from "node:crypto";
import path from "node:path";
import { fileURLToPath } from "node:url";
import express from "express";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.join(__dirname, "dist");

const app = express();
app.set("trust proxy", true);
app.use(express.json({ limit: "1mb" }));

const sha256 = (value) => crypto.createHash("sha256").update(String(value)).digest("hex");
const normalizeEmail = (value) => String(value).trim().toLowerCase();
const normalizeName = (value) => String(value).trim().toLowerCase();
const normalizePhone = (value) => String(value).replace(/[^\d]/g, "");

app.get("/healthz", (_req, res) => {
  res.status(200).json({ ok: true });
});

app.post("/api/meta-conversions", async (req, res) => {
  const pixelId = process.env.META_PIXEL_ID;
  const accessToken = process.env.META_CONVERSION_TOKEN;

  if (!pixelId || !accessToken) {
    return res.status(500).json({ error: "Meta CAPI server configuration missing" });
  }

  const body = req.body ?? {};
  const { eventName, eventId, eventSourceUrl, customData, userData } = body;

  if (!eventName || !eventId) {
    return res.status(400).json({ error: "eventName and eventId are required" });
  }

  const userDataPayload = {
    client_user_agent: req.headers["user-agent"],
    client_ip_address: req.ip,
  };

  if (userData?.email) userDataPayload.em = [sha256(normalizeEmail(userData.email))];
  if (userData?.phone) userDataPayload.ph = [sha256(normalizePhone(userData.phone))];
  if (userData?.firstName) userDataPayload.fn = [sha256(normalizeName(userData.firstName))];
  if (userData?.lastName) userDataPayload.ln = [sha256(normalizeName(userData.lastName))];
  if (userData?.externalId) userDataPayload.external_id = [sha256(String(userData.externalId).trim())];

  const payload = {
    data: [
      {
        event_name: eventName,
        event_time: Math.floor(Date.now() / 1000),
        event_id: eventId,
        action_source: "website",
        event_source_url: eventSourceUrl,
        user_data: userDataPayload,
        custom_data: customData,
      },
    ],
  };

  if (process.env.META_TEST_EVENT_CODE) {
    payload.test_event_code = process.env.META_TEST_EVENT_CODE;
  }

  const response = await fetch(
    `https://graph.facebook.com/v22.0/${pixelId}/events?access_token=${accessToken}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    },
  );

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    return res.status(502).json({ error: "Meta API error", details: data });
  }

  return res.status(200).json({ ok: true, meta: data });
});

app.use(express.static(distDir));

app.get(/^\/(?!api\/).*/, (_req, res) => {
  res.sendFile(path.join(distDir, "index.html"));
});

const port = Number(process.env.PORT || 3000);
app.listen(port, "0.0.0.0", () => {
  console.log(`Staffconnecting server running on port ${port}`);
});