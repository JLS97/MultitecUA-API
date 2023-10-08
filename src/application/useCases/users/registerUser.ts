import { IUser } from "../../../domain/entities/Users/IUser";
import { UsersNotifications } from "../../../domain/entities/Users/IUsersNotifications";
import { INotificationsRespository } from "../../../domain/repositories/INotificationsRepository";
import { IUsersRepository } from "../../../domain/repositories/IUsersRepository";
import { HttpError } from "../../shared/errors/HttpError";
import { validateUser } from "../../shared/utils/validateUserData";
import { v4 as uuidv4 } from 'uuid';

export class RegisterUser {
  constructor(
    private usersRepository: IUsersRepository,
    private notificationService: INotificationsRespository
    ) {}

  async execute(userData: IUser): Promise<IUser> {
    const { password, email } = userData;

    if (!validateUser(userData)) {
      throw new HttpError(400, "Missing parameters: name, phoneNumber, email or password");
    }

    //check if user with email already exists
    const userWithEmail = await this.usersRepository.findByEmail(email);
    if(userWithEmail) {
      throw new HttpError(400, "User with this email already exists");
    }

    const hashedPassword = await this.usersRepository.hashPassword(password);

    const userToSave: IUser = {
      ...userData,
      phoneNumber: uuidv4(),
      rol: 'miembro',
      password: hashedPassword,
    };

    const user = await this.usersRepository.save(userToSave);

    this.notificationService.emit(UsersNotifications.USER_CREATED, user);

    const response = {
      ...user,
    }

    return response;
  }
}