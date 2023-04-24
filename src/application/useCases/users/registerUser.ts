import { IUser } from "../../../domain/entities/IUser";
import { IUsersRepository } from "../../../domain/repositories/IUsersRepository";
import { HttpError } from "../../shared/errors/HttpError";
import { validateUser } from "../../shared/utils/validateUserData";

export class RegisterUser {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(userData: IUser): Promise<IUser> {
    const { phoneNumber, email } = userData;

    if (!validateUser(userData)) {
      throw new HttpError(400, "Missing parameters: name, phoneNumber, email or password");
    }

    const userWithSameEmail = await this.usersRepository.findByEmail(email);

    if (userWithSameEmail) {
      throw new HttpError(409, `User with email ${email} already exists`);
    }

    const userWithSamePhoneNumber = await this.usersRepository.findByPhoneNumber(phoneNumber);

    if (userWithSamePhoneNumber) {
      throw new HttpError(409, `User with phone number ${phoneNumber} already exists`);
    }

    const user = await this.usersRepository.save(userData);

    // You can use any other use case here, this is just an example
    // await usersUseCases.sendWelcomeEmail.execute(user.email);

    return user;
  }
}
