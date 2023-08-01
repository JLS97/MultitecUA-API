import { IUser } from "../../../domain/entities/Users/IUser";
import { IUsersRepository } from "../../../domain/repositories/IUsersRepository";
import { HttpError } from "../../shared/errors/HttpError";
import { validateUser } from "../../shared/utils/validateUserData";

export class RegisterUser {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(userData: IUser): Promise<IUser> {
    const { email, password } = userData;

    if (!validateUser(userData)) {
      throw new HttpError(400, "Missing parameters: name, phoneNumber, email or password");
    }

    const userWithSameEmail = await this.usersRepository.findByEmail(email);

    if (userWithSameEmail) {
      throw new HttpError(409, `User with email ${email} already exists`);
    }

    const hashedPassword = await this.usersRepository.hashPassword(password);

    const userToSave = {
      ...userData,
      phoneNumber: '13217253464379',
      password: hashedPassword,
    };

    const user = await this.usersRepository.save(userToSave);

    const response = {
      ...user,
    }

    return response;
  }
}
