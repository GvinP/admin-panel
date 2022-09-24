import { AxiosResponse } from "axios";
import { publicRequest, userRequest } from "./config";

export const authAPI = {
  login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    return publicRequest.post<AuthResponse>("auth/login", { email, password });
  },
};

export const productAPI = {
  getAllProducts(): Promise<AxiosResponse<IProduct[]>> {
    return userRequest.get<IProduct[]>("products");
  },
  deleteProduct(id: string) {
    return userRequest.delete(`products/${id}`);
  },
};

export interface AuthResponse {
  accessToken: string;
  user: IUser;
}

export interface IUser {
  username: string;
  email: string;
  image: string;
  isAdmin: true;
  createdAt: string;
  updatedAt: string;
  _id: string;
}

export interface IOrder {
  _id: string;
  user: string;
  products: any;
  amount: number;
  address: any;
  status: "Pending" | "Approved" | "Decliend";
  createdAt: string;
}

export interface IProduct {
  _id: string;
  title: string;
  description: string;
  image: string;
  categories: string[];
  size: string[];
  color: string[];
  price: number;
  inStock: boolean;
  createdAt: string;
}
