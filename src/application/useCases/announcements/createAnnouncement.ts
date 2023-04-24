import { IAnnouncement } from "../../../domain/entities/IAnnouncement";
import { IAnnouncementsRepository } from "../../../domain/repositories/IAnnouncementsRepository";
import { HttpError } from "../../shared/errors/HttpError";
import { validateAnnouncement } from "../../shared/utils/validateAnnouncementData";

class CreateAnnouncement {
  constructor(private announcementsRepository: IAnnouncementsRepository) {}

  async execute(announcementData: IAnnouncement): Promise<IAnnouncement> {

    if (!validateAnnouncement(announcementData)) {
      throw new HttpError(400, "Missing parameters: title, city, place, startsAt or finishesAt");
    }

    const announcement = await this.announcementsRepository.save(announcementData);

    // TODO crear un caso de uso para mandar un mail con los datos del anuncio
    // a los usuarios que esten suscritos al sistema de mailing

    return announcement;
  }
}

export { CreateAnnouncement }
