import { AnnouncementsRepository } from "../../../infraestructure/repositories/AnnouncementsRespository";
import { CreateAnnouncement } from "./createAnnouncement";

const announcementsRepository = new AnnouncementsRepository();
const createAnnouncement = new CreateAnnouncement(announcementsRepository);

class AnnouncementsUseCases {
  createAnnouncement = createAnnouncement;
}

const announcementsUseCases = new AnnouncementsUseCases();

export { announcementsUseCases };
