import { IUser } from "../../../domain/entities/Users/IUser";
import { IUsersRepository } from "../../../domain/repositories/IUsersRepository";

export class DeleteUser {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(userId: string): Promise<IUser> {
    return await this.usersRepository.deleteUser(userId);
  }
}
