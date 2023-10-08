import { UsersRepository } from "../../../infraestructure/repositories/UsersRepository";
import { AuthenticateUser } from "./authenticateUser";
import { DeleteUser } from "./deleteUser";
import { GetUsers } from "./getUsers";
import { RegisterUser } from "./registerUser";
import { UpdateUser } from "./updateUser";
import { GetUser } from "./getUser";
import { getNotificationsService } from "../../../infraestructure/services/getNotificationsService";
// importar aquí todos los casos de uso relacionados con usuarios que se quieran encapsular

const usersRepository = new UsersRepository();
const notificationsService = getNotificationsService();

const registerUser = new RegisterUser(usersRepository, notificationsService);
const loginUser = new AuthenticateUser(usersRepository);
const updateUser = new UpdateUser(usersRepository, notificationsService);
const deleteUser = new DeleteUser(usersRepository, notificationsService);
const getUsers = new GetUsers(usersRepository);
const getUser = new GetUser(usersRepository);

class UsersUseCases {
  registerUser = registerUser;
  loginUser = loginUser;
  updateUser = updateUser;
  deleteUser = deleteUser;
  getUsers = getUsers;
  getUser = getUser;
  // inicializar aquí todos los casos de uso relacionados con usuarios que se quieran encapsular
}

const usersUseCases = new UsersUseCases();

export { usersUseCases };
