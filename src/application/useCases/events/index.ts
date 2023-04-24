import { EventsRepository } from "../../../infraestructure/repositories/EventsRepository";
import { CreateEvent } from "./createEvent";

const eventsRepository = new EventsRepository();
const createEvent = new CreateEvent(eventsRepository);

class EventsUseCases {
  createEvent = createEvent;
}

const eventsUseCases = new EventsUseCases();

export { eventsUseCases };
