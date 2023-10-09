import { IAnnouncement } from "./IAnnouncement";

export const AnnouncementsNotifications = {
    ANNOUNCEMENT_CREATED: 'ANNOUNCEMENT_CREATED',
    ANNOUNCEMENT_DELETED: 'ANNOUNCEMENT_DELETED',
    ANNOUNCEMENT_LIKED: 'ANNOUNCEMENT_LIKED',
} as const;
  
export type AnnouncementCreatedNotificationPayload = IAnnouncement;

export type AnnouncementLikedNotificationPayload = {id: string, likedBy: string, likesCount: number};

export type AnnouncementDeletedNotificationPayload = {id: string, creator: string};

