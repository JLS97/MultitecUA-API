import { IUpdateUserRequest } from "../../../domain/entities/Users/IUpdateUserRequest";
import { IUser } from "../../../domain/entities/Users/IUser";
import { UsersNotifications } from "../../../domain/entities/Users/IUsersNotifications";
import { INotificationsRespository } from "../../../domain/repositories/INotificationsRepository";
import { IUsersRepository } from "../../../domain/repositories/IUsersRepository";
import { HttpError } from "../../shared/errors/HttpError";

export class UpdateUser {
  constructor(
    private usersRepository: IUsersRepository,
    private notificationService: INotificationsRespository  
  ) {}

  async execute(userData: IUpdateUserRequest): Promise<IUser> {
    const userToUpdate = await this.usersRepository.findById(userData.id);

    const updatedUser = await this.usersRepository.updateUserData({
      _id: userToUpdate._id,
      name: userData.name ?? userToUpdate.name,
      email: userData.email ?? userToUpdate.email,
      password: userToUpdate.password,
      rol: userData.rol ?? userToUpdate.rol,
      telegramName: userData.telegramName ?? userToUpdate.telegramName,
      phoneNumber: userToUpdate.phoneNumber,
      createdAt: userToUpdate.createdAt,
    });

    if(!updatedUser) throw new HttpError(400,"Unable to update user");

    this.notificationService.emit(UsersNotifications.USER_UPDATED, updatedUser);

    const response = {
      ...updatedUser,
    }

    return response;
  }
}
