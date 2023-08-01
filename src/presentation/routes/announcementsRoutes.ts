import { Router } from "express";
import AnnouncementsController from "../../controllers/announcements";
import { requireAccessToken } from "../../application/shared/utils/requireAccessToken";

export default (router: Router) => {
  router.post('/announcement', requireAccessToken, AnnouncementsController.createAnnouncement);
  router.get('/announcement/:id', AnnouncementsController.getAnnouncement);
  router.delete('/announcement/:id', requireAccessToken, AnnouncementsController.deleteAnnouncement);
  router.post('/announcement/:id/like', requireAccessToken, AnnouncementsController.likeAnnouncement);
  router.put('/announcement/:id', requireAccessToken, AnnouncementsController.updateAnnouncement);

  /**router.get('/announcemnets?page=:page', AnnouncementsController.getAllAnnouncements);*/
}