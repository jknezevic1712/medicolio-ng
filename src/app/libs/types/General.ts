export type Patient = {
  id: string;
  email: string;
  name: string;
  pin: string;
  diagnosis: string;
  prescribtions: string[];
  doctorId: string;
};

export type User = {
  id: string;
  email: string;
  name: string;
  pin: string;
  title: string;
  patients: Patient[];
  kind: string;
  idToken: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
};
