import register from './registerUser';
import login from './loginUser';
import updateUser from './updateUser';
import deleteUser from './deleteUser';
import getUsers from './getUsers';

const UserController = {
  register,
  login,
  updateUser,
  deleteUser,
  getUsers,
};

export default UserController;