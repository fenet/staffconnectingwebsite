type MetaEventParams = Record<string, string | number | boolean | undefined | null>;

export type MetaCapiUserData = {
  email?: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
  externalId?: string;
};

type MetaCapiEventPayload = {
  eventName: string;
  eventId: string;
  eventSourceUrl?: string;
  customData?: MetaEventParams;
  userData?: MetaCapiUserData;
};

const isEnabled = () => import.meta.env.PROD && import.meta.env.VITE_ENABLE_META_CAPI === "true";

export const createMetaEventId = () => {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }

  return `meta_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
};

export const sendMetaConversionsEvent = async (payload: MetaCapiEventPayload) => {
  if (!isEnabled()) return;

  try {
    await fetch("/api/meta-conversions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      keepalive: true,
    });
  } catch {
    // never block the user flow for tracking
  }
};
