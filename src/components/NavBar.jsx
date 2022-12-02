import { useState } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import CartSidebars from './Cart';







const NavBar = () => {
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
     <Navbar  bg="dark" variant="dark" style={{ maxWidth: 900, margin: "0 auto" }} >
      <Container>
        <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/purchase">Purchase</Nav.Link>  
            <Nav.Link onClick={handleShow}>Cart</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      {/* <Nav style={{ maxWidth: 900, margin: "0 auto" }}
        activeKey="/" className='navegacion'>
        <Nav.Item>
          <Nav.Link as={Link} to="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/purchase">Purchase</Nav.Link>
        </Nav.Item>
         <Nav.Item>
          <Nav.Link onClick={handleShow}>Cart</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/login">Login</Nav.Link>
        </Nav.Item>
       
        <Nav.Item>
        </Nav.Item>
      </Nav> */}
      
      <CartSidebars show={show} handleClose={handleClose} />
    </>
    
  );
};
export default NavBar;
