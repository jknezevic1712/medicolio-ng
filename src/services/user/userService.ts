import IUserRepository from '@repositories/user';
// types
import type {
  GetUserDataArgs,
  LoginUserArgs,
  ManageUserDataArgs,
  RegisterUserArgs,
} from '@app/libs/types/API';

export default class UserService {
  private _userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this._userRepository = userRepository;
  }

  async loginUser(data: LoginUserArgs) {
    this._userRepository.loginUser(data);
  }

  async registerUser(data: RegisterUserArgs) {
    this._userRepository.registerUser(data);
  }

  async getUserData(data: GetUserDataArgs) {
    this._userRepository.getUserData(data);
  }

  async manageUserData(data: ManageUserDataArgs) {
    this._userRepository.manageUserData(data);
  }
}
