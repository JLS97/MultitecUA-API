import { IEvent } from "../../../domain/entities/Events/IEvent";
import { IUpdateEventRequest } from "../../../domain/entities/Events/IUpdateEventRequest";
import { IEventsRepository } from "../../../domain/repositories/IEventsRepository";

export class UpdateEvent {
  constructor(private eventsRepository: IEventsRepository) {}

  async execute(eventData: IUpdateEventRequest, rol: string, userId: string): Promise<IEvent> {
    const eventToUpdate = await this.eventsRepository.findById(eventData.id);

    const eventNewData: IEvent = {
        ...eventToUpdate,
        id: eventToUpdate.id,
        title: eventData.title ?? eventToUpdate.title,
        description: eventData.description ?? eventToUpdate.description,
        city: eventData.city ?? eventToUpdate.city,
        place: eventData.place ?? eventToUpdate.place,
        startsAt: eventData.startsAt ?? eventToUpdate.startsAt,
    }

    if(rol === 'miembro') return await this.eventsRepository.updateEventData(eventNewData);
    
    if(eventToUpdate.host === userId) return await this.eventsRepository.updateEventData(eventNewData);

    throw new Error('You are not allowed to update this event');

  }
}
