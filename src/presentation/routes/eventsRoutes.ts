import { Router } from "express";
import EventsController from "../../controllers/events";
import { requireAccessToken } from "../../application/shared/utils/requireAccessToken";

export default (router: Router) => {
  router.post('/event', requireAccessToken, EventsController.createEvent);
}