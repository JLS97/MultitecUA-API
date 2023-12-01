import { IAnnouncement } from "../entities/Announcements/IAnnouncement";

export interface IAnnouncementsRepository {
  findByCreator(creator: string): Promise<IAnnouncement | null>;
  findById(id: string): Promise<IAnnouncement | null>;
  save(announcement: IAnnouncement): Promise<IAnnouncement>;
  delete(id: string): Promise<IAnnouncement | null>;
  findAll(): Promise<IAnnouncement[]>;
  update(announcement: IAnnouncement): Promise<IAnnouncement | null>;
}
