import { UsersRepository } from "../../../infraestructure/repositories/UsersRepository";
import { RegisterUser } from "./registerUser";
// importar aquí todos los casos de uso relacionados con usuarios que se quieran encapsular

const usersRepository = new UsersRepository();
const registerUser = new RegisterUser(usersRepository);

class UsersUseCases {
  registerUser = registerUser;
  // inicializar aquí todos los casos de uso relacionados con usuarios que se quieran encapsular
}

const usersUseCases = new UsersUseCases();

export { usersUseCases };
