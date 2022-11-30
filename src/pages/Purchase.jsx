import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPurchaseThunk } from '../store/slices/purchase.slice';

const Purchase = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPurchaseThunk());
    }, [])


    return (
        <div>
            <h1>Purchase</h1>
        </div>
    );
};

export default Purchase;