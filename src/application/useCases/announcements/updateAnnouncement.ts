import { IAnnouncement } from "../../../domain/entities/Announcements/IAnnouncement";
import { IAnnouncementsRepository } from "../../../domain/repositories/IAnnouncementsRepository";
import { HttpError } from "../../shared/errors/HttpError";
import { validateAnnouncement } from "../../shared/utils/validateAnnouncementData";

export type IAnnouncementRequestData = {
  id: string;
  title?: string;
  description?: string;
}

class UpdateAnnouncement {
  constructor(private announcementsRepository: IAnnouncementsRepository) {}

  async execute(announcementData: IAnnouncementRequestData): Promise<IAnnouncement> {

    if (!announcementData.id) {
      throw new HttpError(400, "Missing parameter: id");
    }

    const announcementToUpdate = await this.announcementsRepository.findById(announcementData.id);

    if (!announcementToUpdate) throw new HttpError(404, "Announcement not found");

    const announcementToSave = {
      ...announcementToUpdate,
      ...announcementData,
      updatedAt: new Date(),
    }

    const announcement = await this.announcementsRepository.update(announcementToSave);

    if (!announcement) throw new HttpError(404, "Announcement could not be updated");

    return announcement;
  }
}

export { UpdateAnnouncement }
