import { Router } from "express";
import AnnouncementsController from "../../controllers/announcements";
import { requireAccessToken } from "../../application/shared/utils/requireAccessToken";

export default (router: Router) => {
  router.post('/announcement', requireAccessToken, AnnouncementsController.createAnnouncement);
}