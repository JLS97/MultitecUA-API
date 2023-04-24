import { Router } from "express";
import AnnouncementsController from "../../controllers/announcements";

export default (router: Router) => {
  router.post('/announcement', AnnouncementsController.createAnnouncement);
}