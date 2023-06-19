import { IAnnouncementRequestData } from "../../useCases/announcements/createAnnouncement";

export const validateAnnouncement = (announcementData: IAnnouncementRequestData): boolean => {
  const { title, description  } = announcementData;

  if (!title || !description) {
    return false;
  }

  // Validar el formato utilizando JOI

  return true;
};
