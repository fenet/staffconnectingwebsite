import crypto from "node:crypto";

const sha256 = (value) => crypto.createHash("sha256").update(value).digest("hex");

const normalizeEmail = (email) => email.trim().toLowerCase();
const normalizeName = (name) => name.trim().toLowerCase();
const normalizePhone = (phone) => phone.replace(/[^\d]/g, "");

const getClientIp = (req) => {
  const forwarded = req.headers["x-forwarded-for"];
  if (typeof forwarded === "string") {
    return forwarded.split(",")[0]?.trim();
  }
  return req.socket?.remoteAddress;
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const pixelId = process.env.META_PIXEL_ID;
  const accessToken = process.env.META_CONVERSION_TOKEN;

  if (!pixelId || !accessToken) {
    return res.status(500).json({ error: "Meta CAPI server configuration missing" });
  }

  const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
  const { eventName, eventId, eventSourceUrl, customData, userData } = body || {};

  if (!eventName || !eventId) {
    return res.status(400).json({ error: "eventName and eventId are required" });
  }

  const userDataPayload = {
    client_user_agent: req.headers["user-agent"],
    client_ip_address: getClientIp(req),
  };

  if (userData?.email) {
    userDataPayload.em = [sha256(normalizeEmail(userData.email))];
  }
  if (userData?.phone) {
    userDataPayload.ph = [sha256(normalizePhone(userData.phone))];
  }
  if (userData?.firstName) {
    userDataPayload.fn = [sha256(normalizeName(userData.firstName))];
  }
  if (userData?.lastName) {
    userDataPayload.ln = [sha256(normalizeName(userData.lastName))];
  }
  if (userData?.externalId) {
    userDataPayload.external_id = [sha256(String(userData.externalId).trim())];
  }

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

  const data = await response.json();

  if (!response.ok) {
    return res.status(502).json({ error: "Meta API error", details: data });
  }

  return res.status(200).json({ ok: true, meta: data });
}
