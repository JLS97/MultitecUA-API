import { registerAnnouncementsNotifications } from "./announcements/registerAnnouncementsNotifications";
import { registerEventsNotifications } from "./events/registerEventsNotifications";
import { registerUserNotifications } from "./users/registerUserNotifications";

export function registerApplicationNotifications() {
  registerUserNotifications();
  registerAnnouncementsNotifications();
  registerEventsNotifications();
}
