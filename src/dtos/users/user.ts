import type { Patient, User } from '@app/libs/types/General';

export default class UserDTO {
  private _id: string;
  private _email: string;
  private _name: string;
  private _pin: string;
  private _title: string;
  private _patients: Patient[];
  private _kind: string;
  private _idToken: string;
  private _refreshToken: string;
  private _expiresIn: string;
  private _localId: string;

  constructor({
    id,
    email,
    name,
    pin,
    title,
    patients,
    kind,
    idToken,
    refreshToken,
    expiresIn,
    localId,
  }: User) {
    this._id = id;
    this._email = email;
    this._name = name;
    this._pin = pin;
    this._title = title;
    this._patients = patients;
    this._kind = kind;
    this._idToken = idToken;
    this._refreshToken = refreshToken;
    this._expiresIn = expiresIn;
    this._localId = localId;
  }

  public get userData() {
    return {
      email: this._email,
      name: this._name,
      pin: this._pin,
      title: this._title,
    };
  }
  public get patients() {
    return this._patients;
  }

  static fromDb(data: User) {
    return new UserDTO({
      id: data.id,
      email: data.email,
      name: data.name,
      pin: data.pin,
      title: data.title,
      patients: data.patients,
      kind: data.kind,
      idToken: data.idToken,
      refreshToken: data.refreshToken,
      expiresIn: data.expiresIn,
      localId: data.localId,
    });
  }
}
