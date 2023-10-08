import { NotificationRepository } from "../repositories/NotificationsRepository";
const notificationsService = new NotificationRepository();
export const getNotificationsService = () => notificationsService;
