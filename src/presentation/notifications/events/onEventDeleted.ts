import { EventDeletedNotificationPayload } from "../../../domain/entities/Events/IEventsNotifications";

export function onEventDeleted() {
  return async (payload: EventDeletedNotificationPayload) => {
    //params.loggerService.info(`[EVENT ${onUserRegistered.name}]: User created with email: ${payload.email}`);
    console.log(`[EVENT ${onEventDeleted.name}]: Event ${payload.id} deleted.`);
  };
}
