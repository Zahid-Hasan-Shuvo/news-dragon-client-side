import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const NavigationBar = () => {
    const {user, logOut}=useContext(AuthContext)
    
    const handleLogout=()=>{
        logOut()
    }
    return (
        <div>
             <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary rounded-2  mt-5 ">
      <Container>
       
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
       
            <Link to='/'>  Home</Link>
              
              
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricing">Career</Nav.Link>
            
          </Nav>
          <Nav className="d-flex justify-content-center align-items-center">
            {user && <FaUserCircle style={{fontSize:'2rem'}}></FaUserCircle>}
            
            {
              user? <Button onClick={handleLogout} variant="dark">Logout</Button>:
          <Link to='/login'><Button variant="dark">Login</Button></Link>
            }
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default NavigationBar;