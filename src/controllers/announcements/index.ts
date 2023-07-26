import createAnnouncement from './createAnnouncement';
import deleteAnnouncement from './deleteAnnouncement';
import getAllAnnouncements from './getAllAnnouncements';
import getAnnouncement from './getAnnouncement';
import likeAnnouncement from './likeAnnouncement';
import updateAnnouncement from './updateAnnouncement';

const AnnouncementsController = {
  createAnnouncement,
  updateAnnouncement,
  deleteAnnouncement,
  getAllAnnouncements,
  getAnnouncement,
  likeAnnouncement,
};

export default AnnouncementsController;