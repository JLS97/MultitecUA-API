import { AnnouncementDeletedNotificationPayload } from "../../../domain/entities/Announcements/IAnnouncementsNotifications";

export function onAnnouncementDeleted() {
  return async (payload: AnnouncementDeletedNotificationPayload) => {
    console.log(`[EVENT ${onAnnouncementDeleted.name}]: Announcement with id ${payload.id} deleted. Notifying creator ${payload.creator}`);
  };
}
