import { IEvent } from "../entities/IEvent";

export interface IEventsRepository {
  findByHost(host: string): Promise<IEvent | null>;
  findById(id: string): Promise<IEvent | null>;
  save(event: IEvent): Promise<IEvent>;
}
