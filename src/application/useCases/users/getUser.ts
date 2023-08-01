import { IUsersRepository } from "../../../domain/repositories/IUsersRepository";

export class GetUser {
  constructor(private usersRepository: IUsersRepository) {}

  execute = async(id: string) =>  await this.usersRepository.findById(id);
}

