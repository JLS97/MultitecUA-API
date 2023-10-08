
export interface INotificationsRespository {
    on<T>(NotificationName: string, cb: (payload: T) => void | Promise<void>): void;
    emit<T>(NotificationName: string, payload: T): void;
}
