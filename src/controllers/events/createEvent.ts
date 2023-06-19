import { Request, Response } from "express";
import { HttpError } from "../../application/shared/errors/HttpError";
import { eventsUseCases } from "../../application/useCases/events";

const createEvent = async (req: Request, res: Response) => {
  try {
    const event = await eventsUseCases.createEvent.execute(req.body.data, req.body.user);
    return res.status(201).json(event);
  } catch (error) {
    if (error instanceof HttpError) {
      return res.status(error.status).json({ message: error.message });
    } else {
      return res.status(500).json({ message: 'Internal server error' });
    }
  }
};

export default createEvent;