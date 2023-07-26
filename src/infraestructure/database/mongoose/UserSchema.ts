import { Schema, model } from 'mongoose';
import { IUser } from '../../../domain/entities/IUser';

const UserSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String },
  password: { type: String, required: true },
  telegramName: { type: String, required: false},
  rol: { type: String, required: true, default: 'miembro'},
  createdAt: { type: Date, default: Date.now }
});

export default model<IUser>('User', UserSchema);