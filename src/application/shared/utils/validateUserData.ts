import { IUser } from "../../../domain/entities/IUser";

export const validateUser = (userData: IUser): boolean => {
  const { name, phoneNumber, email, password } = userData;

  if (!name || !phoneNumber || !email || !password) {
    return false;
  }

  // Validar el formato del email, número de teléfono, etc. utilizando JOI

  return true;
};

