import { AxiosResponse } from "axios";
import { publicRequest } from "./config";

export const authAPI = {
  login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    return publicRequest.post<AuthResponse>("auth/login", { email, password });
  },
};

export interface AuthResponse {
    accessToken: string;
    user: IUser;
  }
  
  export interface IUser {
    _id: string;
    username: string;
    email: string;
    isAdmin: boolean;
    createdAt: string;
  }