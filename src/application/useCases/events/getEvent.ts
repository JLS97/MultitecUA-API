import { IEvent } from "../../../domain/entities/Events/IEvent";
import { IEventsRepository } from "../../../domain/repositories/IEventsRepository";

export class GetEvent {
  constructor(private eventsRepository: IEventsRepository) {}

  execute = async (id: string): Promise<IEvent> => await this.eventsRepository.findById(id);
}
