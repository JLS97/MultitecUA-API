import { IEvent } from "../../../domain/entities/IEvent";
import { IEventsRepository } from "../../../domain/repositories/IEventsRepository";
import { HttpError } from "../../shared/errors/HttpError";
import mailingSystem from "../../shared/utils/MailingSystem";
import { validateEvent } from "../../shared/utils/validateEventData";

export class CreateEvent {
  constructor(private eventsRepository: IEventsRepository) {}

  async execute(eventData: IEvent): Promise<IEvent> {

    if (!validateEvent(eventData)) {
      throw new HttpError(400, "Missing parameters: host, title, city, place, startsAt or finishesAt");
    }

    const event = await this.eventsRepository.save(eventData);

    // Creamos el anuncio correspondiente a este evento
    // para ello debemos mapear la informacion del evento que necesitamos para el anuncio
    // await announcementsUseCases.createAnnouncement.execute(announcementData);

    
    mailingSystem.sendNewAnnouncement(`Hey ${event.host} has just created the event ${event.title}. Check it out on MultitecUA.es`);


    return event;
  }
}
