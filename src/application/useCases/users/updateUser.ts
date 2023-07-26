import { IUser } from "../../../domain/entities/IUser";
import { IUsersRepository } from "../../../domain/repositories/IUsersRepository";
import { HttpError } from "../../shared/errors/HttpError";

export class UpdateUser {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(userData: IUser): Promise<IUser> {
    
    const updatedUser = await this.usersRepository.updateUserData(userData);

    if (!updatedUser) {
      throw new HttpError(404, `User with email ${userData.email} not found`);
    }

    const response = {
        ...updatedUser,
    }

    return response;
  }
}
