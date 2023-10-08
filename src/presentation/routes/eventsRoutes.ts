import { Router } from "express";
import EventsController from "../../controllers/events";
import { requireAccessToken } from "../../application/shared/utils/requireAccessToken";

export default (router: Router) => {
  router.post('/event', requireAccessToken, EventsController.createEvent);
  router.get('/event/:id', requireAccessToken, EventsController.getEvent);
  router.put('/event/:id', requireAccessToken, EventsController.updateEvent);
  router.delete('/event/:id', requireAccessToken, EventsController.deleteEvent);
  router.post('/event/:id/assist', requireAccessToken, EventsController.assistToEvent);

  /**
  router.get('/events?page=:page', EventsController.getLastEvents);
  */
}