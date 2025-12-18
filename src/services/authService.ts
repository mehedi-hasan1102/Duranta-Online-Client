import axiosClient from "../api/axiosClient";
import {
  LoginPayload,
  RegisterPayload,
  LoginResponse,
  RegisterResponse,
  MeResponse,
} from "../types/auth";

export const registerUser = (data: RegisterPayload) =>
  axiosClient.post<RegisterResponse>("/register", data);

export const loginUser = (data: LoginPayload) =>
  axiosClient.post<LoginResponse>("/login", data);

export const logoutUser = () =>
  axiosClient.post<{ success: boolean; message: string }>("/logout");

export const getMe = () =>
  axiosClient.get<MeResponse>("/me");
