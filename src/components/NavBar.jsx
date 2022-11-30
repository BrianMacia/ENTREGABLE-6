import { useState } from 'react';
import { Offcanvas } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";
import CartSidebars from './Cart';







const NavBar = () => {
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Nav style={{ maxWidth: 500, margin: "0 auto" }}
        activeKey="/home" className='navegacion'>
        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/purchase" >Purchase</Nav.Link>
        </Nav.Item>
         <Nav.Item>
          <Nav.Link as={Link} to="/cart" onClick={handleShow}>Cart</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/login" >Login</Nav.Link>
        </Nav.Item>
       
        <Nav.Item>
        </Nav.Item>
      </Nav>
      <CartSidebars show={show} handleClose={handleClose} />
    </>
    
  );
};
export default NavBar;
