// ? https://www.youtube.com/watch?v=BaUsKK6AX5Q 1:38:43

import IUserRepository from '@repositories/user/index';
// dtos
import UserDTO from '@dtos/users/user';
// utils
import env from '@environments/env';
import type {
  GetUserDataArgs,
  LoginUserArgs,
  ManageUserDataArgs,
  RegisterUserArgs,
  UserAuthResData,
} from '@app/libs/types/API';

// Live / Production Repository
export class UserRepository implements IUserRepository {
  private _db: any;
  private app: any;
  private firebaseConfig: any;

  constructor() {
    // TODO: instantiate db here

    this.firebaseConfig = {
      apiKey: env.API_KEY,
      authDomain: env.AUTH_DOMAIN,
      projectId: env.PROJECT_ID,
      storageBucket: env.STORAGE_BUCKET,
      messagingSenderId: env.MESSAGING_SENDER_ID,
      appId: env.APP_ID,
    };
    // this._db = getFirestore(this.app);
    // this.app = initializeApp(this.firebaseConfig);
  }

  async registerUser(data: RegisterUserArgs) {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.firebaseConfig.apiKey}`;

    const { email, password, pin, name, title } = data;

    const request = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
        returnSecureToken: true,
      }),
    });
    if (!request.ok) throw new Error('Failed to register user.');

    const response: UserAuthResData = await request.json();

    await setDoc(doc(this.db, 'users', response.localId), {
      id: pin,
      pin: pin,
      name: name,
      title: title,
      patients: [],
      role: 'doctor',
    });

    const userData = await this.getUserData(response.localId);
    return userData;
  }

  async loginUser(data: LoginUserArgs) {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.firebaseConfig.apiKey}`;

    const { email, password } = data;

    const request = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
        returnSecureToken: true,
      }),
    });
    if (!request.ok) throw new Error('Failed to login user.');

    const response: UserAuthResData = await request.json();

    const userData = await this.getUserData(response.localId);
    return userData;
  }

  async getUserData(userId: GetUserDataArgs): Promise<UserDTO> {
    const userRef = doc(this.db, 'users', userId);
    const userSnap = await getDoc(userRef);
    if (!userSnap.exists()) {
      console.log('Failed to fetch user data. ', userId);
      throw new Error('Failed to fetch user data.');
    }

    const userData = userSnap.data();
    const userDTO = UserDTO.fromDb(userData);
    return userDTO;
  }

  async manageUserData(data: ManageUserDataArgs): Promise<UserDTO> {
    const userRef = doc(this.db, 'users', data.localId);

    await updateDoc(userRef, {
      ...data,
    });

    const userData = await this.getUserData(data.localId);
    return userData;
  }
}
