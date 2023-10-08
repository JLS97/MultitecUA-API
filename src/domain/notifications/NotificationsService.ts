export abstract class NotificationsService {
    /**
     * Listen to a specific notification
     * @param NotificationName Notification name
     * @param cb Callback to be executed when the notification is emitted
     */
    abstract on<T>(NotificationName: string, cb: (payload: T) => void | Promise<void>): void;
  
    /**
     * Emit a specific notification
     * @param NotificationName Notification name
     * @param payload Notification payload
     */
    abstract emit<T>(NotificationName: string, payload: T): void;
  }