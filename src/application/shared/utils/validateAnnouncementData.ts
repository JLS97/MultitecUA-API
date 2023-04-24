import { IAnnouncement } from "../../../domain/entities/IAnnouncement";

export const validateAnnouncement = (announcementData: IAnnouncement): boolean => {
  const { title, description, announcer  } = announcementData;

  if (!title || !description || !announcer) {
    return false;
  }

  // Validar el formato utilizando JOI

  return true;
};
