import { AnnouncementsRepository } from "../../../infraestructure/repositories/AnnouncementsRespository";
import { UsersRepository } from "../../../infraestructure/repositories/UsersRepository";
import { getNotificationsService } from "../../../infraestructure/services/getNotificationsService";
import { CreateAnnouncement } from "./createAnnouncement";
import { DeleteAnnouncement } from "./deleteAnnouncement";
import { GetAllAnnouncements } from "./getAllAnnouncements";
import { GetAnnouncement } from "./getAnnouncement";
import { LikeAnnouncement } from "./likeAnnouncement";
import { UpdateAnnouncement } from "./updateAnnouncement";

const announcementsRepository = new AnnouncementsRepository();
const usersRepository = new UsersRepository();

const notificationsService = getNotificationsService();

const createAnnouncement = new CreateAnnouncement(announcementsRepository, notificationsService);
const updateAnnouncement = new UpdateAnnouncement(announcementsRepository);
const deleteAnnouncement = new DeleteAnnouncement(announcementsRepository, notificationsService);
const getAnnouncement = new GetAnnouncement(announcementsRepository);
const getAllAnnouncements = new GetAllAnnouncements(announcementsRepository);
const likeAnnouncement = new LikeAnnouncement(usersRepository, announcementsRepository, notificationsService);

class AnnouncementsUseCases {
  createAnnouncement = createAnnouncement;
  updateAnnouncement = updateAnnouncement;
  deleteAnnouncement = deleteAnnouncement;
  getAnnouncement = getAnnouncement;
  getAllAnnouncements = getAllAnnouncements;
  likeAnnouncement = likeAnnouncement;
}

const announcementsUseCases = new AnnouncementsUseCases();

export { announcementsUseCases };
