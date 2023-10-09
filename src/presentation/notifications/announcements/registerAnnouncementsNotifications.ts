import { AnnouncementsNotifications } from "../../../domain/entities/Announcements/IAnnouncementsNotifications";
import { getNotificationsService } from "../../../infraestructure/services/getNotificationsService";
import { onAnnouncementCreated } from "./onAnnouncementCreated";
import { onAnnouncementDeleted } from "./onAnnouncementDeleted";
import { onAnnouncementLiked } from "./onAnnouncementLiked";

const notificationsService = getNotificationsService();
// const loggerService = getLoggerService();

export const registerAnnouncementsNotifications = () => {
    notificationsService.on(
        AnnouncementsNotifications.ANNOUNCEMENT_CREATED, 
        onAnnouncementCreated(
            //{loggerService}
        )
    );
    notificationsService.on(
        AnnouncementsNotifications.ANNOUNCEMENT_LIKED, 
        onAnnouncementLiked(
             //{loggerService}
        )
    );
    notificationsService.on(
        AnnouncementsNotifications.ANNOUNCEMENT_DELETED, 
        onAnnouncementDeleted()
    );
}
