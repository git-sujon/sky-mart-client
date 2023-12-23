export interface IUser {
  name: {
    firstName: string;
    lastName: string;
  };
  email: string;
  password: string;
  phoneNumber: string;
  role: string;
  address?: string;
}

export interface IJwtDecoded {
  email: string;
  role: string;
  iat: number;
  exp: number;
}
