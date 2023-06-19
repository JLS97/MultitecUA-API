import { IUser } from "../../../domain/entities/IUser";
import { INewsletterRepository } from "../../../domain/repositories/INewsletterRepository";
import { IUsersRepository } from "../../../domain/repositories/IUsersRepository";
import { HttpError } from "../../shared/errors/HttpError";
import { validateUser } from "../../shared/utils/validateUserData";

export class RegisterUser {
  constructor(private usersRepository: IUsersRepository, private newsletterRepository: INewsletterRepository) {}

  async execute(userData: IUser): Promise<IUser> {
    const { phoneNumber, email, password } = userData;

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

    const hashedPassword = await this.usersRepository.hashPassword(password);

    const userToSave = {
      ...userData,
      password: hashedPassword,
    };

    const user = await this.usersRepository.save(userToSave);

    // añadimos al usuario a la lista para recibir newsletters y emails
    await this.newsletterRepository.save(user.email);

    return user;
  }
}
