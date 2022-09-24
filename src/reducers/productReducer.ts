import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { productAPI, IProduct } from "../api/api";

export interface ProductState {
  products: IProduct[];
  isLoading: boolean;
  error: boolean;
}

const initialState: ProductState = {
  products: [],
  isLoading: false,
  error: false,
};

export const getAllProducts = createAsyncThunk<IProduct[] | undefined, void>(
  "products/getAllProducts",
  async (_, thunkAPI) => {
    thunkAPI.dispatch(getProductStart());
    try {
      const response = await productAPI.getAllProducts();
      thunkAPI.dispatch(getProductSuccess());
      return response.data;
    } catch (error) {
      console.log(error);
      thunkAPI.dispatch(getProductFailure());
    }
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProductStart: (state) => {
      state.isLoading = true;
      state.error = false;
    },
    getProductSuccess: (state) => {
      state.isLoading = false;
    },
    getProductFailure: (state) => {
      state.isLoading = false;
      state.error = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.products = action.payload!;
    });
  },
});

export const { getProductStart, getProductSuccess, getProductFailure } =
  productSlice.actions;

export default productSlice.reducer;
