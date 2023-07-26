import { IUser } from "../../../domain/entities/IUser";
import { IUsersRepository } from "../../../domain/repositories/IUsersRepository";
import { HttpError } from "../../shared/errors/HttpError";

export class GetUsers {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(): Promise<IUser[]> {
    
    const users = await this.usersRepository.getAllUsers();

    if (!users) {
      throw new HttpError(404, `No users registered yet`);
    }

    const response = {
        ...users,
    }

    return response;
  }
}
