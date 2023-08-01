import { EventsRepository } from "../../../infraestructure/repositories/EventsRepository";
import { CreateEvent } from "./createEvent";
import { DeleteEvent } from "./deleteEvent";
import { GetEvent } from "./getEvent";
import { UpdateEvent } from "./updateEvent";
import { AssistToEvent } from "./assistToEvent";

const ALLOWED_ROLES = ['miembro', 'directivo'];

const eventsRepository = new EventsRepository();
const createEvent = new CreateEvent(eventsRepository);
const getEvent = new GetEvent(eventsRepository);
const updateEvent = new UpdateEvent(eventsRepository);
const deleteEvent = new DeleteEvent(eventsRepository);
const assistToEvent = new AssistToEvent(eventsRepository,ALLOWED_ROLES);

class EventsUseCases {
  createEvent = createEvent;
  getEvent = getEvent;
  updateEvent = updateEvent;
  deleteEvent = deleteEvent;
  assistToEvent = assistToEvent;
}

const eventsUseCases = new EventsUseCases();

export { eventsUseCases };
