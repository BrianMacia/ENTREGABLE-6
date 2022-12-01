import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../utils/getConfig';
import { setIsLoading } from './isLoading.slice';


export const cartSlice = createSlice({
    name: 'Cart',
    initialState: [],
    reducers: {
        setCart: (state, action) => {
            return action.payload
        }
    }
})

export const cartSliceThunk = () => dispatch => {
    console.log("me hice 1")
    dispatch(setIsLoading(true));    
        return axios.get('https://e-commerce-api.academlo.tech/api/v1/cart', getConfig() )
        .then(res => dispatch(setCart(res.data.data.cart.products)))
        .finally(() => dispatch(setIsLoading(false)))
}

export const createCartThunk = (productcartadded) => (dispatch) => {
    console.log("me hice2")
    dispatch(setIsLoading(true));
        return axios.post('https://e-commerce-api.academlo.tech/api/v1/cart', productcartadded, getConfig())
        .then(res => dispatch(cartSliceThunk()))
        .catch(error=> console.log (error.response.data))
        .finally(() => dispatch(setIsLoading(false)));
}

export const { setCart } = cartSlice.actions;

export default cartSlice.reducer;
