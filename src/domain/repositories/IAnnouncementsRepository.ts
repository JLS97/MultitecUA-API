import { IAnnouncement } from "../entities/IAnnouncement";

export interface IAnnouncementsRepository {
  findByCreator(creator: string): Promise<IAnnouncement | null>;
  findById(id: string): Promise<IAnnouncement | null>;
  save(event: IAnnouncement): Promise<IAnnouncement>;
}
