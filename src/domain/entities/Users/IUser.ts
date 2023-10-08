export interface IUser {
  _id: string;
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  telegramName?: string;
  rol: "simpatizante" | "miembro" | "directivo";
  createdAt: Date;
}
