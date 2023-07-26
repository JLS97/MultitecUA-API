import { Request, Response } from "express";
import { usersUseCases } from "../../application/useCases/users";
import { HttpError } from "../../application/shared/errors/HttpError";

const updateUser = async (req: Request, res: Response) => {
  try {
    await usersUseCases.updateUser.execute(req.body);
    return res.status(200).json();
  } catch (error) {
    if (error instanceof HttpError) {
      return res.status(error.status).json({ message: error.message });
    } else {
      console.log(error)
      return res.status(500).json({ message: 'Internal server error' });
    }
  }
};

export default updateUser;