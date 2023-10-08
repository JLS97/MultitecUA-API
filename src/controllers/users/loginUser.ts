import { Request, Response } from "express";
import { usersUseCases } from "../../application/useCases/users";
import { HttpError } from "../../application/shared/errors/HttpError";

const registerUser = async (req: Request, res: Response) => {
  try {
    if(!req.body.email || !req.body.password) throw new HttpError(400, "Missing parameters");
    const user = await usersUseCases.loginUser.execute(req.body.email, req.body.password);
    return res.status(201).json(user);
  } catch (error) {
    if (error instanceof HttpError) {
      return res.status(error.status).json({ message: error.message });
    } else {
      return res.status(500).json({ message: 'Internal server error' });
    }
  }
};

export default registerUser;