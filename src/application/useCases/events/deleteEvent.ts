import { IEvent } from "../../../domain/entities/Events/IEvent";
import { IEventsRepository } from "../../../domain/repositories/IEventsRepository";

export class DeleteEvent {
  constructor(private eventsRepository: IEventsRepository) {}

  async execute(eventId: string, rol: string, userId: string): Promise<IEvent> {
    if(rol === 'directivo') {
        return await this.eventsRepository.deleteEvent(eventId);
    }

    const eventToDelete = await this.eventsRepository.findById(eventId);

    if(eventToDelete.host === userId) {
        return await this.eventsRepository.deleteEvent(eventId);
    }
    throw new Error('You are not allowed to delete this event');
  }
}
