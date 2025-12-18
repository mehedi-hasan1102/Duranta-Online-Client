export interface User {
  _id: string;
  name?: string;
  email: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
}

export interface LoginResponse {
  success: boolean;
  user: User;
}

export interface RegisterResponse {
  success: boolean;
  message: string;
}

export interface MeResponse {
  success: boolean;
  user: User;
}
