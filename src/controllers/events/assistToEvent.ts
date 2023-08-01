import { Request, Response } from "express";
import { HttpError } from "../../application/shared/errors/HttpError";
import { eventsUseCases } from "../../application/useCases/events";

const assistToEvent = async (req: Request, res: Response) => {
  try {
    const rol: string = req.headers.rol as string;
    const userId: string = req.headers.userId as string;
    const event = await eventsUseCases.assistToEvent.execute(req.params.id, rol, userId);
    return res.status(201).json(event);
  } catch (error) {
    if (error instanceof HttpError) {
      return res.status(error.status).json({ message: error.message });
    } else {
      return res.status(500).json({ message: 'Internal server error' });
    }
  }
};

export default assistToEvent;