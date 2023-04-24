import { Schema, model } from 'mongoose';
import { IEvent } from '../../../domain/entities/IEvent';

const EventSchema = new Schema<IEvent>({
  title: { type: String, required: true },
  description: { type: String },
  host: { type: String, required: true },
  city: { type: String, required: true },
  place: { type: String, required: true, dafault: "Alicante"},
  startsAt: { type: Date, required: false},
  finishesAt: { type: Date, required: true},
  createdAt: { type: Date, default: Date.now },
  assistants: { type: [String], default: []},
  likes: { type: [String], default: []},
});

export default model<IEvent>('Event', EventSchema);