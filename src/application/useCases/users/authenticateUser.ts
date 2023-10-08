import { IUser } from "../../../domain/entities/Users/IUser";
import { IUsersRepository } from "../../../domain/repositories/IUsersRepository";
import { HttpError } from "../../shared/errors/HttpError";

export class AuthenticateUser {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(email:string, password:string): Promise<IUser> {

    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new HttpError(409, `User with email ${email} doesn't exists`);
    }

    // check password
    const isPasswordValid = await this.usersRepository.checkPassword(password, user.password);

    if (!isPasswordValid) {
      throw new HttpError(401, "Invalid password");
    }

    const jwtToken = await this.usersRepository.generateJWT(user);

    const userWithToken = {
        ...user,
        token: jwtToken
    }

    return userWithToken;
  }
}
