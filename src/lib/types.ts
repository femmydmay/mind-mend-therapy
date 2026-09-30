export interface User {
  id: number;
  name?: string;

  email: string;
nickname:string;
  password: string;
  role: Role;
  emailVerified?: Date;
  createdAt: Date;
  updatedAt?: Date;

  tokens: Token[];

}
export enum Role {
  admin = "admin",
  user = "user",
}

// Token Type
export interface Token {
  id: number;
  token: string;
  refreshToken?: string;
  userId: number;
  createdAt: Date;
  updatedAt?: Date;
}