import React, { useEffect } from 'react';
import { Offcanvas } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getCartThunk } from '../store/slices/cart.slice';



const CartSidebars= ({show, handleClose}) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCartThunk());
    }, []);

    const Cart =useSelector(state => state.cart)

    
    return (
        <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title><h1>Cart</h1></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
            {Cart.map(product => (
                <div>
                <li>
                <h2>Product :{product.title}</h2>
                <h2>Price :{product.price}</h2>
                </li>
             </div>))}

            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default CartSidebars;