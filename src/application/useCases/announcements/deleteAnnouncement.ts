import { AnnouncementsNotifications } from "../../../domain/entities/Announcements/IAnnouncementsNotifications";
import { IAnnouncementsRepository } from "../../../domain/repositories/IAnnouncementsRepository";
import { INotificationsRespository } from "../../../domain/repositories/INotificationsRepository";
import { HttpError } from "../../shared/errors/HttpError";
import { validateDeleteAnnouncementData } from "../../shared/utils/validateDeleteAnnouncementData";

export type IDeleteAnnouncementRequestData = {
  id: string;
  creator: string;
}

class DeleteAnnouncement {
  constructor(
    private announcementsRepository: IAnnouncementsRepository,
    private notificationsService: INotificationsRespository
  ) {}

  async execute(announcementData: IDeleteAnnouncementRequestData): Promise<Boolean> {

    if (!validateDeleteAnnouncementData(announcementData)) {
      throw new HttpError(400, "Missing parameters: title, city, place, startsAt or finishesAt");
    }

    const announcementDeleted = await this.announcementsRepository.delete(announcementData.id);

    if (!announcementDeleted) {
      throw new HttpError(404, "Could not find announcement to delete");
    }

    this.notificationsService.emit(AnnouncementsNotifications.ANNOUNCEMENT_DELETED, {
      creator: announcementData.creator,
      announcementId: announcementData.id
    });

    return true;
  }
}

export { DeleteAnnouncement }
