import { Router } from "express";
import EventsController from "../../controllers/events";
import { requireAccessToEvents } from "../../application/shared/utils/requireAccesToEvents";

export default (router: Router) => {
  router.post('/event', requireAccessToEvents, EventsController.createEvent);
  router.get('/event/:id', requireAccessToEvents, EventsController.getEvent);
  router.put('/event/:id', requireAccessToEvents, EventsController.updateEvent);
  router.delete('/event/:id', requireAccessToEvents, EventsController.deleteEvent);
  router.post('/event/:id/assist', requireAccessToEvents, EventsController.assistToEvent);

  /**
  router.get('/events?page=:page', EventsController.getLastEvents);
  */
}