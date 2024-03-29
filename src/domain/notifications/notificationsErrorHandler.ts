import { LoggerService } from '../logger/LoggerService';

export function notificationsErrorHandler<T>(cb: (payload: T) => Promise<void> | void, logger?: LoggerService) {
  return async (eventPayload: T): Promise<void> => {
    try {
      await cb(eventPayload);
    } catch (error) {
      logger?.error(`[EVENT ERROR]:`);
      logger?.error(error);
    }
  };
}