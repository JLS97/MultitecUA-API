import { IUsersRepository } from "../../../domain/repositories/IUsersRepository";

export class GetUsers {
  constructor(private usersRepository: IUsersRepository) {}

  execute = async() =>  await this.usersRepository.getAllUsers();
}

