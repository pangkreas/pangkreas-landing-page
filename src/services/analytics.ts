type EventName =
  | "hero_primary_cta_clicked"
  | "hero_secondary_cta_clicked"
  | "solution_selected"
  | "creation_opened"
  | "contact_form_started"
  | "contact_form_submitted"
  | "contact_form_failed"
  | "whatsapp_clicked"
  | "language_changed";
export function track(
  event: EventName,
  properties: Record<string, string> = {},
) {
  if (import.meta.env.VITE_ANALYTICS_ENABLED !== "true") return;
  window.dispatchEvent(
    new CustomEvent("pangkreas:analytics", { detail: { event, properties } }),
  );
}
