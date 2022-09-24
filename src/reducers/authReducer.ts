import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { NavigateFunction } from "react-router-dom";
import { authAPI, AuthResponse, IUser } from "../api/api";

export interface AuthState {
  currentUser: IUser;
  token: string;
  isLoading: boolean;
  error: boolean;
}

interface AuthData {
  email: string;
  password: string;
  navigate: NavigateFunction;
}

const initialState: AuthState = {
  currentUser: {} as IUser,
  token: "",
  isLoading: false,
  error: false,
};

export const login = createAsyncThunk<AuthResponse | undefined, AuthData>(
  "auth/login",
  async ({ email, password, navigate }: AuthData, thunkAPI) => {
    thunkAPI.dispatch(loginStart());
    try {
      const response = await authAPI.login(email, password);
      thunkAPI.dispatch(loginSuccess());
      navigate("/");
      return response.data;
    } catch (error) {
      thunkAPI.dispatch(loginFailure());
      console.log(error);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isLoading = true;
    },
    loginSuccess: (state) => {
      state.isLoading = false;
    },
    loginFailure: (state) => {
      state.isLoading = false;
      state.error = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.currentUser = action.payload?.user!;
      state.token = action.payload?.accessToken!;
    });
  },
});

export const { loginStart, loginFailure, loginSuccess } = authSlice.actions;

export default authSlice.reducer;
