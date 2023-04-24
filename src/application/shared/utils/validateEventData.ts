import { IEvent } from "../../../domain/entities/IEvent";

export const validateEvent = (eventData: IEvent): boolean => {
  const { title, city, place, startsAt, finishesAt } = eventData;

  if (!title || !city || !place || !startsAt || !finishesAt) {
    return false;
  }

  // Validar el formato del email, número de teléfono, etc. utilizando JOI

  return true;
};
