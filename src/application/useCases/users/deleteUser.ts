import { IUser } from "../../../domain/entities/Users/IUser";
import { UsersNotifications } from "../../../domain/entities/Users/IUsersNotifications";
import { INotificationsRespository } from "../../../domain/repositories/INotificationsRepository";
import { IUsersRepository } from "../../../domain/repositories/IUsersRepository";
import { HttpError } from "../../shared/errors/HttpError";

export class DeleteUser {
  constructor(
    private usersRepository: IUsersRepository,
    private notificationService: INotificationsRespository
  ) {}

  async execute(userId: string): Promise<IUser> {
    const deletedUser =  await this.usersRepository.deleteUser(userId);

    if(!deletedUser) throw new HttpError(400,"Unable to delete user");

    const response = {
      ...deletedUser,
    }

    this.notificationService.emit(UsersNotifications.USER_DELETED, deletedUser);

    return response;
  }
}
