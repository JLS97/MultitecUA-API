import { UserDeletedNotificationPayload } from "../../../domain/entities/Users/IUsersNotifications";

export function onUserDeleted() {
  return async (payload: UserDeletedNotificationPayload) => {
    //params.loggerService.info(`[EVENT ${onUserRegistered.name}]: User created with email: ${payload.email}`);
    console.log(`[EVENT ${onUserDeleted.name}]: User created with id ${payload._id}`);
  };
}
