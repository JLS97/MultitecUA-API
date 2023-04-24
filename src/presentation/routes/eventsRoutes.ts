import { Router } from "express";
import EventsController from "../../controllers/events";

export default (router: Router) => {
  router.post('/event', EventsController.createEvent);
}