import { IUser } from "../../../domain/entities/IUser";

export const validateUser = (userData: IUser): boolean => {
  const { name, email, password } = userData;

  if (!name || !email || !password) {
    return false;
  }

  // Validar el formato del email, número de teléfono, etc. utilizando JOI

  return true;
};

export const validateLoginUser = (userData: IUser): boolean => {
  const { email, password } = userData;

  if (!email || !password) {
    return false;
  }

  return true;
}

export const validateAuthenticateUser = (userData: IUser): boolean => {
  const { email, password } = userData;

  if (!email || !password) {
    return false;
  }

  return true;
}


