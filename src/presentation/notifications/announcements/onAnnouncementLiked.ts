import { AnnouncementLikedNotificationPayload } from "../../../domain/entities/Announcements/IAnnouncementsNotifications";

export function onAnnouncementLiked() {
  return async (payload: AnnouncementLikedNotificationPayload) => {
    //params.loggerService.info(`[EVENT ${onUserRegistered.name}]: User created with email: ${payload.email}`);
    console.log(`[EVENT ${onAnnouncementLiked.name}]: Announcement ${payload.id} liked by ${payload.likedBy}, total count of likes: ${payload.likesCount}`);
  };
}
