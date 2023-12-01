import { IAnnouncement } from "../../../domain/entities/Announcements/IAnnouncement";
import { IAnnouncementsRepository } from "../../../domain/repositories/IAnnouncementsRepository";

class GetAllAnnouncements {
  constructor(private announcementsRepository: IAnnouncementsRepository) {}

  async execute(): Promise<IAnnouncement[]> {

    const announcement: IAnnouncement[] = await this.announcementsRepository.findAll();

    return announcement;
  }
}

export { GetAllAnnouncements }
