import { Router } from "express";
import UserController from "../../controllers/users";
import { requireDirectivoAccess } from "../../application/shared/utils/requireDirectivoAccess";

export default (router: Router) => {
  router.post('/register', UserController.register);
  router.post('/login', UserController.login);
  router.put('/user/:id',requireDirectivoAccess, UserController.updateUser);
  router.delete('/user:/id',requireDirectivoAccess, UserController.deleteUser);
  router.get('/user/:id',requireDirectivoAccess, UserController.getUser);
  router.get('/users',requireDirectivoAccess, UserController.getUsers);
}