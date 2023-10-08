import { UserUpdatedNotificationPayload } from '../../../domain/entities/Users/IUsersNotifications';
// import { LoggerService } from '../../../domain/logger/LoggerService.js';

// interface Params {
//   loggerService: LoggerService;
// }

export function onUserUpdated(
    //params: Params
) {
  return async (payload: UserUpdatedNotificationPayload) => {
    //params.loggerService.info(`[EVENT ${onUserRegistered.name}]: User created with email: ${payload.email}`);
    console.log(`[EVENT ${onUserUpdated.name}]: User with id ${payload._id} updated`);
  };
}
