import { IEvent } from "../../../domain/entities/Events/IEvent";
import { IEventsRepository } from "../../../domain/repositories/IEventsRepository";
import { HttpError } from "../../shared/errors/HttpError";

export class AssistToEvent {
  constructor(private eventsRepository: IEventsRepository, private ALLOWED_ROLES: string[]) {}

  async execute(eventId: string, rol: string, userId: string): Promise<IEvent> {

    if (!this.ALLOWED_ROLES.includes(rol)) throw new HttpError(403, 'You are not allowed to update this event');

    if (!eventId || !rol || !userId) throw new HttpError(400, 'Invalid input data');

    const { assistants } = await this.eventsRepository.findById(eventId);

    const assistantsSet = new Set(assistants);

    if (assistantsSet.has(userId)) {
      assistantsSet.delete(userId);
    } else {
      assistantsSet.add(userId);
    }

    const assistantsUpdated = [...assistantsSet];

    return await this.eventsRepository.updateEventAssistants(eventId, assistantsUpdated);
  }
}