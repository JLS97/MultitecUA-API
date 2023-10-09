import { IAnnouncement } from "../../../domain/entities/Announcements/IAnnouncement";
import { IAnnouncementsRepository } from "../../../domain/repositories/IAnnouncementsRepository";
import { HttpError } from "../../shared/errors/HttpError";

class GetAnnouncement {
  constructor(private announcementsRepository: IAnnouncementsRepository) {}

  async execute(announcementId: string): Promise<IAnnouncement> {

    if(!announcementId) throw new HttpError(400, "Missing parameters: announcementId");

    const announcement = await this.announcementsRepository.findById(announcementId);

    if (!announcement) throw new HttpError(404, "Announcement not found");

    return announcement;
  }
}

export { GetAnnouncement }
