import { EventEmitter as NotificationEmitter } from 'events';
import { LoggerService } from '../../domain/logger/LoggerService';
import { NotificationsService } from '../../domain/notifications/NotificationsService';
import { notificationsErrorHandler } from '../../domain/notifications/notificationsErrorHandler';
import { INotificationsRespository } from '../../domain/repositories/INotificationsRepository';

interface NotificationServiceParams {
  loggerService?: LoggerService;
}

export class NotificationRepository extends NotificationsService implements INotificationsRespository{
  private _NotificationEmitter: NotificationEmitter;
  private _logger?: LoggerService;

  constructor(params?: NotificationServiceParams) {
    super();
    this._logger = params?.loggerService;

    this._NotificationEmitter = new NotificationEmitter({
      captureRejections: true,
    });

    this._NotificationEmitter.on('error', (...args) => {
      this._logger?.error('Error sending Notifications');
      this._logger?.error(args);
    });
  }

  on<T>(NotificationName: string, cb: (payload: T) => void | Promise<void>) {
    this._NotificationEmitter.on(NotificationName, notificationsErrorHandler(cb, this._logger));
  }

  emit<T>(NotificationName: string, payload: T) {
    this._NotificationEmitter.emit(NotificationName, payload);
  }
}
