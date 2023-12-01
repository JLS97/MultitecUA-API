import { EventMarkedAsAssistNotificationPayload } from "../../../domain/entities/Events/IEventsNotifications";

export function onEventMarkedAsAssist() {
  return async (payload: EventMarkedAsAssistNotificationPayload) => {
    //params.loggerService.info(`[EVENT ${onUserRegistered.name}]: User created with email: ${payload.email}`);
    console.log(`[EVENT ${onEventMarkedAsAssist.name}]: Event ${payload.id} marked to assist by ${payload.assistedBy}, total assistents: ${payload.assistsCount}`);
  };
}
