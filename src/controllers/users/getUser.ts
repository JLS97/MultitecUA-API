import { Request, Response } from "express";
import { usersUseCases } from "../../application/useCases/users";
import { HttpError } from "../../application/shared/errors/HttpError";

const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await usersUseCases.getUser.execute(req.params.id);
    return res.status(200).json(users);
  } catch (error) {
    if (error instanceof HttpError) {
      return res.status(error.status).json({ message: error.message });
    } else {
      console.log(error)
      return res.status(500).json({ message: 'Internal server error' });
    }
  }
};

export default getUsers;