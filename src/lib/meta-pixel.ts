import { createMetaEventId, sendMetaConversionsEvent } from "./meta-conversions";

type MetaEventParams = Record<string, string | number | boolean | undefined | null>;

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

const canTrack = () => typeof window !== "undefined" && typeof window.fbq === "function";

const track = (eventName: string, params?: MetaEventParams) => {
  const eventId = createMetaEventId();

  if (canTrack()) {
    window.fbq!("track", eventName, params ?? {}, { eventID: eventId });
  }

  sendMetaConversionsEvent({
    eventName,
    eventId,
    customData: params,
    eventSourceUrl: typeof window !== "undefined" ? window.location.href : undefined,
  });
};

export const trackPageView = () => {
  track("PageView");
};

export const trackViewContent = (params?: MetaEventParams) => {
  track("ViewContent", params);
};

export const trackCompleteRegistration = (params?: MetaEventParams) => {
  track("CompleteRegistration", params);
};

export const trackLead = (params?: MetaEventParams) => {
  track("Lead", params);
};
