import { EventCreatedNotificationPayload } from "../../../domain/entities/Events/IEventsNotifications";

export function onEventCreated() {
  return async (payload: EventCreatedNotificationPayload) => {
    //params.loggerService.info(`[EVENT ${onUserRegistered.name}]: User created with email: ${payload.email}`);
    console.log(`[EVENT ${onEventCreated.name}]: Event ${payload.id} created by ${payload.host}`);
  };
}
