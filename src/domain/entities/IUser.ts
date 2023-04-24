export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  telegramName?: string;
  isActiveMember: boolean;
  createdAt: Date;
}
