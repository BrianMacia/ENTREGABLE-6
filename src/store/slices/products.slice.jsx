import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setIsLoading } from "./isLoading.slice";

export const newsProductSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    setProducts: (state, action) => {
      return action.payload;
    },
  },
});


export const filterHeadlineThunk = (inputSearch) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .get(
      `https://e-commerce-api.academlo.tech/api/v1/products/?headline__icontains=${inputSearch}`
    )
    .then((res) => dispatch(setProducts(res.data?.data?.products)))
    .finally(() => dispatch(setIsLoading(false)));
};


export const getNewsThunk = () => (dispatch) => {
  dispatch(setIsLoading(true));
  axios
    .get(`https://e-commerce-api.academlo.tech/api/v1/products`)
    .then((res) => dispatch(setProducts(res.data?.data?.products)))
    .finally(() => dispatch(setIsLoading(false)));
};
export const filterNewsThunk = (id) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .get(`https://e-commerce-api.academlo.tech/api/v1/products/${id}`)
    .then((res) => dispatch(setProducts(res.data?.data?.products)))
    .finally(() => dispatch(setIsLoading(false)));
};



export const CartThunk= () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios
        .get(`https://e-commerce-api.academlo.tech/api/v1/cart`)
        .then(() => dispatch())
        .finally(() => dispatch(setIsLoading(false)));
}

export const { setCart } = CartThunk.actions;

export default CartThunk.reducer;
