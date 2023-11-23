import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Register = () => {
  const [accepted, setAccepted]=useState(false)
    const {createUser} =useContext(AuthContext)
const handleRegister=(event)=>{
 event.preventDefault()
 const form=event.target;
 const name=form.name.value;
 const photo=form.photo.value;
 const email= form.email.value;
 const password= form.password.value;
 createUser(email, password)
 .then(result=>{
    const createdUser=result.user;
    console.log(createdUser);
 })
 .catch(error=>console.log(error.message))
}

const handleAccepted=(event)=>{
  setAccepted(event.target.checked)
}

    return (
        <Container>
        <h2 className='text-lg-center '>Please Register</h2>
       <Form onSubmit={handleRegister} className='w-50 mx-auto mt-3 '>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Name" name="name"  required/>
   
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Photo Url</Form.Label>
    <Form.Control type="text" placeholder="Enter photo url" name="photo"  required/>
   
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" name="email"  required/>
   
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password"  name="password"  required />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check onClick={handleAccepted} type="checkbox" label={<>Accept <Link to='/terms'>Terms and condition</Link></>} />
  </Form.Group>
  <Button  disabled={!accepted} variant="primary" type="submit">
    Register
  </Button>
  <br />
  <Form.Text className="text-secondary">
    Already have an account? <Link to='/login'>Login</Link>
      </Form.Text>
  <Form.Text className="text-success">
      
      </Form.Text>
  <Form.Text className="text-danger">
      
    </Form.Text>
</Form>
    </Container>
    );
};

export default Register;