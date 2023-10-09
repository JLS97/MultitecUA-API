import { AnnouncementCreatedNotificationPayload } from "../../../domain/entities/Announcements/IAnnouncementsNotifications";


export function onAnnouncementCreated() {
  return async (payload: AnnouncementCreatedNotificationPayload) => {
    console.log(`[EVENT ${onAnnouncementCreated.name}]: Announcement created with id ${payload.id}`);
  };
}
