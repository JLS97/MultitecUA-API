import register from './registerUser';
import login from './loginUser';
import updateUser from './updateUser';
import deleteUser from './deleteUser';
import getUsers from './getUsers';
import getUser from './getUser';

const UserController = {
  register,
  login,
  updateUser,
  deleteUser,
  getUsers,
  getUser,
};

export default UserController;