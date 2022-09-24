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
    thunkAPI.dispatch(fetchingStart());
    try {
      const response = await productAPI.getAllProducts();
      thunkAPI.dispatch(fetchingSuccess());
      return response.data;
    } catch (error) {
      console.log(error);
      thunkAPI.dispatch(fetchingFailure());
    }
  }
);

export const deleteProduct = createAsyncThunk<string | undefined, string>(
  "products/deleteProduct",
  async (id, thunkAPI) => {
    thunkAPI.dispatch(fetchingStart());
    try {
    //   await productAPI.deleteProduct(id);
      thunkAPI.dispatch(fetchingSuccess());
      return id;
    } catch (error) {
      console.log(error);
      thunkAPI.dispatch(fetchingFailure());
    }
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    fetchingStart: (state) => {
      state.isLoading = true;
      state.error = false;
    },
    fetchingSuccess: (state) => {
      state.isLoading = false;
    },
    fetchingFailure: (state) => {
      state.isLoading = false;
      state.error = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.products = action.payload!;
    });
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      state.products.splice(
        state.products.findIndex((item) => item._id === action.payload),
        1
      );
    });
  },
});

export const { fetchingStart, fetchingSuccess, fetchingFailure } =
  productSlice.actions;

export default productSlice.reducer;
