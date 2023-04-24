import { Router } from "express";
import UserController from "../../controllers/users";

export default (router: Router) => {
  router.post('/register', UserController.register);
}