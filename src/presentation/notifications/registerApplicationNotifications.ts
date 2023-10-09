import { registerAnnouncementsNotifications } from "./announcements/registerAnnouncementsNotifications";
import { registerUserNotifications } from "./users/registerUserNotifications";

export function registerApplicationNotifications() {
  registerUserNotifications();
  registerAnnouncementsNotifications();
}
