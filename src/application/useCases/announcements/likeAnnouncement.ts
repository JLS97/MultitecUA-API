import { IAnnouncement } from "../../../domain/entities/Announcements/IAnnouncement";
import { AnnouncementsNotifications } from "../../../domain/entities/Announcements/IAnnouncementsNotifications";
import { IAnnouncementsRepository } from "../../../domain/repositories/IAnnouncementsRepository";
import { INotificationsRespository } from "../../../domain/repositories/INotificationsRepository";
import { IUsersRepository } from "../../../domain/repositories/IUsersRepository";
import { HttpError } from "../../shared/errors/HttpError";

export type ILikedAnnouncementRequestData = {
  announcementId: string;
  likedBy: string;
}

class LikeAnnouncement {
  constructor(
    private usersRepository: IUsersRepository,
    private announcementsRepository: IAnnouncementsRepository,
    private notificationsService: INotificationsRespository
  ) {}

  async execute(announcementData: ILikedAnnouncementRequestData): Promise<IAnnouncement> {

    if (!announcementData.announcementId || !announcementData.likedBy){
      throw new HttpError(400, "Missing parameters: announcementId or likedBy");
    }

    const announcementToLike = await this.announcementsRepository.findById(announcementData.announcementId);

    if (!announcementToLike) throw new HttpError(404, "Announcement not found");

    const userThatLiked = await this.usersRepository.findByEmail(announcementData.likedBy);

    if (!userThatLiked) throw new HttpError(404, "User not found");

    const announcementToSave = {
      ...announcementToLike,
      likes: [...announcementToLike.likes, userThatLiked._id]
    }

    const announcement = await this.announcementsRepository.save(announcementToSave);

    this.notificationsService.emit(AnnouncementsNotifications.ANNOUNCEMENT_LIKED, {
      id: announcement.id,
      likedBy: userThatLiked._id,
      likesCount: announcement.likes.length
    });

    return announcement;
  }
}

export { LikeAnnouncement }
