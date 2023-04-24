import Event from "../database/mongoose/EventSchema";
import { IEvent } from "../../domain/entities/IEvent";
import { IEventsRepository } from "../../domain/repositories/IEventsRepository";

export class EventsRepository implements IEventsRepository {
  async save(event: IEvent): Promise<IEvent> {
    const createdEvent = await Event.create(event);
    return createdEvent.toObject();
  }

  async findByHost(host: string): Promise<IEvent | null> {
    const event = await Event.findOne({ host }).lean();
    return event ? event : null;
  }

  async findById(id: string): Promise<IEvent | null> {
    const event = await Event.findById(id).lean();
    return event ? event : null;
  }
}
