import { AnnouncementsRepository } from "../../../infraestructure/repositories/AnnouncementsRespository";
import { CreateAnnouncement } from "./createAnnouncement";
import { DeleteAnnouncement } from "./deleteAnnouncement";
import { GetAllAnnouncements } from "./getAllAnnouncements";
import { GetAnnouncement } from "./getAnnouncement";
import { LikeAnnouncement } from "./likeAnnouncement";
import { UpdateAnnouncement } from "./updateAnnouncement";

const announcementsRepository = new AnnouncementsRepository();
const createAnnouncement = new CreateAnnouncement(announcementsRepository);
const updateAnnouncement = new UpdateAnnouncement(announcementsRepository);
const deleteAnnouncement = new DeleteAnnouncement(announcementsRepository);
const getAnnouncement = new GetAnnouncement(announcementsRepository);
const getAllAnnouncements = new GetAllAnnouncements(announcementsRepository);
const likeAnnouncement = new LikeAnnouncement(announcementsRepository);

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
