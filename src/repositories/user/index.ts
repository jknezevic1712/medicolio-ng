import UserDTO from '@dtos/users/user';
// types
import type {
  GetUserDataArgs,
  LoginUserArgs,
  ManageUserDataArgs,
  RegisterUserArgs,
} from '@app/libs/types/API';

export default interface IUserRepository {
  registerUser(data: RegisterUserArgs): Promise<UserDTO>;

  loginUser(data: LoginUserArgs): Promise<UserDTO>;

  getUserData(userId: GetUserDataArgs): Promise<UserDTO>;

  manageUserData(data: ManageUserDataArgs): Promise<UserDTO>;
}
