import { IDeleteAnnouncementRequestData } from "../../useCases/announcements/deleteAnnouncement";

export const validateDeleteAnnouncementData = (announcementData: IDeleteAnnouncementRequestData): boolean => {
  const { id, creator  } = announcementData;

  if (!id || !creator) {
    return false;
  }

  // Validar el formato utilizando JOI

  return true;
};
