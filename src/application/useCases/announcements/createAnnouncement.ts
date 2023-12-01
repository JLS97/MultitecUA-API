import { IAnnouncement } from "../../../domain/entities/Announcements/IAnnouncement";
import { AnnouncementsNotifications } from "../../../domain/entities/Announcements/IAnnouncementsNotifications";
import { IAnnouncementsRepository } from "../../../domain/repositories/IAnnouncementsRepository";
import { INotificationsRespository } from "../../../domain/repositories/INotificationsRepository";
import { HttpError } from "../../shared/errors/HttpError";
import { validateAnnouncement } from "../../shared/utils/validateAnnouncementData";
import { v4 as uuidv4 } from 'uuid';

export type IAnnouncementRequestData = {
  title: string;
  description: string;
  creatorId: string;
}

class CreateAnnouncement {
  constructor(
    private announcementsRepository: IAnnouncementsRepository,
    private notificationsService: INotificationsRespository  
  ) {}

  async execute(announcementData: IAnnouncementRequestData): Promise<IAnnouncement> {

    if (!validateAnnouncement(announcementData)) {
      throw new HttpError(400, "Missing parameters: title, city, place, startsAt or finishesAt");
    }

    const announcementToSave: IAnnouncement = {
      ...announcementData,
      id: uuidv4(),
      announcer: announcementData.creatorId,
      createdAt: new Date(),
      likes: [],
      comments: [],
    }

    const announcement = await this.announcementsRepository.save(announcementToSave);

    this.notificationsService.emit(AnnouncementsNotifications.ANNOUNCEMENT_CREATED, announcement);

    return announcement;
  }
}

export { CreateAnnouncement }
