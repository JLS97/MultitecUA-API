import { Router } from "express";
import UserController from "../../controllers/users";
import { requireAccessToken } from "../../application/shared/utils/requireAccessToken";

export default (router: Router) => {
  router.post('/register', UserController.register);
  router.post('/login', UserController.login);
  router.put('/user',requireAccessToken, UserController.updateUser);
  router.delete('/user:id',requireAccessToken, UserController.deleteUser);
  router.get('/users',requireAccessToken, UserController.deleteUser);
}