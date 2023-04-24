import { Schema, model } from 'mongoose';
import { IAnnouncement } from '../../../domain/entities/IAnnouncement';

const AnnouncementSchema = new Schema<IAnnouncement>({
  title: { type: String, required: true },
  description: { type: String, required: true},
  announcer: { type: String, required: true},
  createdAt: { type: Date, default: Date.now },
  likes: { type: [String], default: []},
  comments: { type: [String], default: []},
});

export default model<IAnnouncement>('Announcement', AnnouncementSchema);