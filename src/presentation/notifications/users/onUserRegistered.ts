import { UserCreatedNotificationPayload } from '../../../domain/entities/Users/IUsersNotifications';
// import { LoggerService } from '../../../domain/logger/LoggerService.js';

// interface Params {
//   loggerService: LoggerService;
// }

export function onUserRegistered(
    //params: Params
) {
  return async (payload: UserCreatedNotificationPayload) => {
    //params.loggerService.info(`[EVENT ${onUserRegistered.name}]: User created with email: ${payload.email}`);
    console.log(`[EVENT ${onUserRegistered.name}]: User created with id ${payload._id}`);
  };
}
