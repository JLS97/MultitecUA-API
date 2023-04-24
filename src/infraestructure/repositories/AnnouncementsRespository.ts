import Announcement from "../database/mongoose/AnnouncementSchema";
import { IAnnouncement } from "../../domain/entities/IAnnouncement";
import { IAnnouncementsRepository } from "../../domain/repositories/IAnnouncementsRepository";

export class AnnouncementsRepository implements IAnnouncementsRepository {
  async save(announcement: IAnnouncement): Promise<IAnnouncement> {
    const createdAnnouncement = await Announcement.create(announcement);
    return createdAnnouncement.toObject();
  }

  async findByCreator(creator: string): Promise<IAnnouncement | null> {
    const announcement = await Announcement.findOne({ creator }).lean();
    return announcement ? announcement : null;
  }

  async findById(id: string): Promise<IAnnouncement | null> {
    const announcement = await Announcement.findById(id).lean();
    return announcement ? announcement : null;
  }
}
