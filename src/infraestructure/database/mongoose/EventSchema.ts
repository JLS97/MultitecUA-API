import { Schema, model } from 'mongoose';
import { IEvent } from '../../../domain/entities/Events/IEvent';

const EventSchema = new Schema<IEvent>({
  title: { type: String, required: true },
  description: { type: String },
  host: { type: String, required: true },
  city: { type: String, required: true },
  place: { type: String, required: true, dafault: "Alicante"},
  startsAt: { type: Date, required: false},
  createdAt: { type: Date, default: Date.now },
  assistants: { type: [String], default: []},
});

export default model<IEvent>('Event', EventSchema);