import { IUser } from "../../../domain/entities/IUser";
import { IUsersRepository } from "../../../domain/repositories/IUsersRepository";
import { HttpError } from "../../shared/errors/HttpError";
import { validateAuthenticateUser } from "../../shared/utils/validateUserData";

export class AuthenticateUser {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(userData: IUser): Promise<IUser> {
    const { email, password } = userData;

    if (!validateAuthenticateUser(userData)) {
      throw new HttpError(400, "Missing parameters");
    }

    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new HttpError(409, `User with email ${email} doesn't exists`);
    }

    // check password
    const isPasswordValid = await this.usersRepository.checkPassword(password, user.password);

    if (!isPasswordValid) {
      throw new HttpError(401, "Invalid password");
    }

    const jwtToken = this.usersRepository.generateJWT(user);

    const userWithToken = {
        ...user,
        token: jwtToken
    }

    return userWithToken;
  }
}
