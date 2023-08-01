import { IEvent } from "../entities/Events/IEvent";

export interface IEventsRepository {
  findByHost(host: string): Promise<IEvent | null>;
  findById(id: string): Promise<IEvent>;
  save(event: IEvent): Promise<IEvent>;
  updateEventData(eventData: IEvent): Promise<IEvent>;
  deleteEvent(id: string): Promise<IEvent>;
  updateEventAssistants(eventId: string, asistants: string[]): Promise<IEvent>;
}
