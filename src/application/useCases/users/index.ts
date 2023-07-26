import { NewsletterRepository } from "../../../infraestructure/repositories/NewsletterRepository";
import { UsersRepository } from "../../../infraestructure/repositories/UsersRepository";
import { AuthenticateUser } from "./authenticateUser";
import { DeleteUser } from "./deleteUser";
import { GetUsers } from "./getUsers";
import { RegisterUser } from "./registerUser";
import { UpdateUser } from "./updateUser";
// importar aquí todos los casos de uso relacionados con usuarios que se quieran encapsular

const usersRepository = new UsersRepository();
const newsletterRepository = new NewsletterRepository();
const registerUser = new RegisterUser(usersRepository,  newsletterRepository);
const loginUser = new AuthenticateUser(usersRepository);
const updateUser = new UpdateUser(usersRepository);
const deleteUser = new DeleteUser(usersRepository);
const getUsers = new GetUsers(usersRepository);

class UsersUseCases {
  registerUser = registerUser;
  loginUser = loginUser;
  updateUser = updateUser;
  deleteUser = deleteUser;
  getUsers = getUsers;
  // inicializar aquí todos los casos de uso relacionados con usuarios que se quieran encapsular
}

const usersUseCases = new UsersUseCases();

export { usersUseCases };
