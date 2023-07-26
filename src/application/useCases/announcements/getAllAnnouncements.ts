import { IAnnouncement } from "../../../domain/entities/IAnnouncement";
import { IAnnouncementsRepository } from "../../../domain/repositories/IAnnouncementsRepository";
import { HttpError } from "../../shared/errors/HttpError";
import { validateAnnouncement } from "../../shared/utils/validateAnnouncementData";

export type IAnnouncementRequestData = {
  title: string;
  description: string;
}

class GetAllAnnouncements {
  constructor(private announcementsRepository: IAnnouncementsRepository) {}

  async execute(announcementData: IAnnouncementRequestData, creatorEmail: string): Promise<IAnnouncement> {

    if (!validateAnnouncement(announcementData)) {
      throw new HttpError(400, "Missing parameters: title, city, place, startsAt or finishesAt");
    }

    const announcementToSave: IAnnouncement = {
      ...announcementData,
      announcer: creatorEmail,
      createdAt: new Date(),
      likes: [],
      comments: [],
    }

    const announcement = await this.announcementsRepository.save(announcementToSave);
    return announcement;
  }
}

export { GetAllAnnouncements }
