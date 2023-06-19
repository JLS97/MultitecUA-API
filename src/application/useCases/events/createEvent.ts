import { IEvent } from "../../../domain/entities/IEvent";
import { IEventsRepository } from "../../../domain/repositories/IEventsRepository";
import { HttpError } from "../../shared/errors/HttpError";
//import mailingSystem from "../../shared/utils/MailingSystem";
import { validateEvent } from "../../shared/utils/validateEventData";

export type IEventRequestData = {
  title: string;
  description?: string;
  city: string;
  place: string;
  startsAt: Date;
  finishesAt: Date;
}

export class CreateEvent {
  constructor(private eventsRepository: IEventsRepository) {}

  async execute(eventData: IEventRequestData, creatorEmail: string): Promise<IEvent> {

    if (!validateEvent(eventData)) {
      throw new HttpError(400, "Missing parameters: host, title, city, place, startsAt or finishesAt");
    }

    const eventToSave: IEvent = {
      ...eventData,
      host: creatorEmail,
      createdAt: new Date(),
      assistants: [],
      likes: [],
    }

    const event = await this.eventsRepository.save(eventToSave);

    // Creamos el anuncio correspondiente a este evento
    // para ello debemos mapear la informacion del evento que necesitamos para el anuncio
    // await announcementsUseCases.createAnnouncement.execute(announcementData);

    
    //mailingSystem.sendNewAnnouncement(`Hey ${event.host} has just created the event ${event.title}. Check it out on MultitecUA.es`);


    return event;
  }
}
