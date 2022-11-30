import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setIsLoading } from './isLoading.slice';
import getConfig from '../../utils/getConfig';

export const PurchaseSlice = createSlice({
    name: 'purchase',
    initialState: [],
    reducers: {
        setPurchase: (state, action) => {
            return action.payload;
        }
    }
})

export const getPurchaseThunk = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get(`https://e-commerce-api.academlo.tech/api/v1/purchases`, getConfig())
        .then((res) => dispatch(setPurchase(res.data.data.purchases)))
        .finally(() => dispatch(setIsLoading(false)));
}

export const { setPurchase } = PurchaseSlice.actions;

export default PurchaseSlice.reducer;
