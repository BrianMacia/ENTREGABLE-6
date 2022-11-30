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
                <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
            {Cart.map(product => (
                <div>{product.title}</div>))}

            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default CartSidebars;