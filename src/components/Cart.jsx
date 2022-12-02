import React, { useEffect } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { cartSliceThunk, CheckoutThunt, createCartThunk} from '../store/slices/cart.slice';



const CartSidebars= ({show, handleClose}) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(cartSliceThunk());
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
                <h6>Product :{product.title}</h6>
                <h6>Price :{product.price}</h6>
                <h6>Quantity :{product.productsInCart.quantity}</h6>
                
                </li>
             </div>))}
                   <Button onClick={() => dispatch(CheckoutThunt())}>Checkout</Button> 
            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default CartSidebars;