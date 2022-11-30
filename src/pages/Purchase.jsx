import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPurchaseThunk } from '../store/slices/purchase.slice';

const Purchase = () => {

    const dispatch = useDispatch();

    const purchase = useSelector(state => state.purchase);


    useEffect(() => {
        dispatch(getPurchaseThunk());
    }, [])


    return (
        <div className='purchasestyle'>
            <h1>Purchase</h1>
            <ul>
                {
                    purchase.map(purchase => (
                        <li key={purchase.id}>
                            {purchase.cart.products.map(product => (
                                <li>
                                    <h2><b>Purchase Date :</b>{product.createdAt}</h2>
                                    <h3><b>Product ID :</b>{product.id}</h3>
                                    <h3><b>Product : </b>{product.title}</h3>
                                    <h3><b>Price :</b>{product.price}</h3>
                                    
                                 </li>
                           ))}
                        </li>
                    ))
                }

            </ul>
        </div>
    );
};

export default Purchase;