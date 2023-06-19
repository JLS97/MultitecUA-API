import { NewsletterRepository } from "../../../infraestructure/repositories/NewsletterRepository";
import { UsersRepository } from "../../../infraestructure/repositories/UsersRepository";
import { AuthenticateUser } from "./authenticateUser";
import { RegisterUser } from "./registerUser";
// importar aquí todos los casos de uso relacionados con usuarios que se quieran encapsular

const usersRepository = new UsersRepository();
const newsletterRepository = new NewsletterRepository();
const registerUser = new RegisterUser(usersRepository,  newsletterRepository);
const loginUser = new AuthenticateUser(usersRepository);

class UsersUseCases {
  registerUser = registerUser;
  loginUser = loginUser;
  // inicializar aquí todos los casos de uso relacionados con usuarios que se quieran encapsular
}

const usersUseCases = new UsersUseCases();

export { usersUseCases };
