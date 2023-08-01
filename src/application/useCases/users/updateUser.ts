import { IUpdateUserRequest } from "../../../domain/entities/Users/IUpdateUserRequest";
import { IUser } from "../../../domain/entities/Users/IUser";
import { IUsersRepository } from "../../../domain/repositories/IUsersRepository";

export class UpdateUser {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(userData: IUpdateUserRequest): Promise<IUser> {
      const userToUpdate = await this.usersRepository.findById(userData.id);

      return await this.usersRepository.updateUserData({
        id: userToUpdate.id,
        name: userData.name ?? userToUpdate.name,
        email: userData.email ?? userToUpdate.email,
        password: userToUpdate.password,
        rol: userData.rol ?? userToUpdate.rol,
        telegramName: userData.telegramName ?? userToUpdate.telegramName,
        phoneNumber: userToUpdate.phoneNumber,
        createdAt: userToUpdate.createdAt,
      });
  }
}
