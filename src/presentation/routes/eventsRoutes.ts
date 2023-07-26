import { Router } from "express";
import EventsController from "../../controllers/events";
import { requireAccessToken } from "../../application/shared/utils/requireAccessToken";

export default (router: Router) => {
  router.post('/event', requireAccessToken, EventsController.createEvent);
  router.get('/event/:id', requireAccessToken, EventsController.createEvent);
  router.delete('/event/:id', requireAccessToken, EventsController.createEvent);
  router.get('/events?page=:page', requireAccessToken, EventsController.createEvent);
  router.get('/event/:id/assist', requireAccessToken, EventsController.createEvent);
}