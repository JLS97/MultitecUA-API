import { EventUpdatedNotificationPayload } from "../../../domain/entities/Events/IEventsNotifications";

export function onEventUpdated() {
  return async (payload: EventUpdatedNotificationPayload) => {
    console.log(`[EVENT ${onEventUpdated.name}]: Event ${payload.id} updated by ${payload.creator}`);
  };
}
