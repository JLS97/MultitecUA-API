import Event from "../database/mongoose/EventSchema";
import { IEvent } from "../../domain/entities/Events/IEvent";
import { IEventsRepository } from "../../domain/repositories/IEventsRepository";
import { HttpError } from "../../application/shared/errors/HttpError";

export class EventsRepository implements IEventsRepository {
  async save(event: IEvent): Promise<IEvent> {
    const createdEvent = await Event.create(event);
    return createdEvent.toObject();
  }

  async findByHost(host: string): Promise<IEvent | null> {
    const event = await Event.findOne({ host }).lean();
    return event ? event : null;
  }

  async findById(id: string): Promise<IEvent> {
    const event = await Event.findById(id).lean();
    if(!event) {
      throw new HttpError(404, `Event not found`);
    };
    return event;
  }

  async updateEventData(eventData: IEvent): Promise<IEvent> {
    const event = await Event.findByIdAndUpdate(eventData.id, eventData, { new: true }).lean();
    if(!event) {
      throw new HttpError(404, `Error updating event`);
    }
    return event;
  }

  async deleteEvent(id: string): Promise<IEvent> {
    const deletedEvent = await Event.findByIdAndDelete(id).lean();
    if(!deletedEvent) {
      throw new HttpError(404, `Error deleting event`);
    }
    return deletedEvent;
  }

  async updateEventAssistants(eventId: string, asistants: string[]): Promise<IEvent> {
    const updatedEvent = await Event.findByIdAndUpdate(eventId, { asistants }, { new: true }).lean();
    if(!updatedEvent) {
      throw new HttpError(404, `Error updating event`);
    }
    return updatedEvent;
  }

}
