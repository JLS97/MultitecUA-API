import { Schema, model } from 'mongoose';
import { IUser } from '../../../domain/entities/IUser';

const UserSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isActiveMember: { type: Boolean, required: true, default: false},
  telegramName: { type: String, required: false},
  createdAt: { type: Date, default: Date.now }
});

export default model<IUser>('User', UserSchema);