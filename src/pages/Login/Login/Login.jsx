import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';


const Login = () => {
 const location= useLocation()
    const {signIn} =useContext(AuthContext)
    const navigate=useNavigate()
    const from = location.state?.from?.pathname || "/category/0";
const handleLogin=(event)=>{
 event.preventDefault()
 const form=event.target;
 const email= form.email.value;
 const password= form.password.value;
 signIn(email, password)

 .then(result=>{
    const signIn=result.user;
    console.log(signIn);
    navigate(from)
   
 })
 .catch(error=>console.log(error.message))
}
    return (
        <Container>
            <h2 className='text-center mt-3'>Please Login</h2>
           <Form onSubmit={handleLogin} className='w-50 mx-auto mt-3 '>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email"  required/>
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"  name="password"  required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
       Login
      </Button>
      <br />
      <Form.Text className="text-secondary">
          Don't have an account? <Link to='/register'>Register</Link>
          </Form.Text>
      <Form.Text className="text-success">
          
          </Form.Text>
      <Form.Text className="text-danger">
          
        </Form.Text>
    </Form>
        </Container>
    );
};

export default Login;