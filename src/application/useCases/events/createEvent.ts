import { IEvent } from "../../../domain/entities/Events/IEvent";
import { IEventsRepository } from "../../../domain/repositories/IEventsRepository";
import { HttpError } from "../../shared/errors/HttpError";
import { v4 as uuidv4 } from 'uuid';
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

    // crear el evento para guardar con el id generado por mongo

    const eventToSave: IEvent = {
      id: this.generateRandomId(),
      title: eventData.title,
      description: eventData.description,
      city: eventData.city,
      place: eventData.place,
      startsAt: eventData.startsAt,
      host: creatorEmail,
      assistants: [],
      createdAt: new Date(),
    };

    const event = await this.eventsRepository.save(eventToSave);

    // Creamos el anuncio correspondiente a este evento
    // para ello debemos mapear la informacion del evento que necesitamos para el anuncio
    // await announcementsUseCases.createAnnouncement.execute(announcementData);

    
    //mailingSystem.sendNewAnnouncement(`Hey ${event.host} has just created the event ${event.title}. Check it out on MultitecUA.es`);


    return event;
  }

  private generateRandomId(): string {
    return uuidv4();
  }

}
