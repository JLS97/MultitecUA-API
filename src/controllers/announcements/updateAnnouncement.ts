import { Request, Response } from "express";
import { HttpError } from "../../application/shared/errors/HttpError";
import { announcementsUseCases } from "../../application/useCases/announcements";

const updateAnnouncement = async (req: Request, res: Response) => {
  try {
    const announcement = await announcementsUseCases.updateAnnouncement.execute(req.body.data);
    return res.status(201).json(announcement);
  } catch (error) {
    if (error instanceof HttpError) {
      return res.status(error.status).json({ message: error.message });
    } else {
      return res.status(500).json({ message: 'Internal server error' });
    }
  }
};

export default updateAnnouncement;