import { IEventRequestData } from "../../useCases/events/createEvent";

export const validateEvent = (eventData: IEventRequestData): boolean => {
  const { title, city, place, startsAt, finishesAt } = eventData;

  if (!title || !city || !place || !startsAt || !finishesAt) {
    return false;
  }

  // Validar el formato del email, número de teléfono, etc. utilizando JOI

  return true;
};
