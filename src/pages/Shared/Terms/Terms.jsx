import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <Container>
            <p>Please Read it full fully..</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam quia asperiores voluptatum recusandae veritatis delectus adipisci quod, maxime quos eligendi praesentium placeat laboriosam fugit laborum sunt sed! Quaerat ad quia accusantium earum quod! Recusandae similique magnam a doloribus repellendus fugit quas dolores nobis, sequi incidunt hic beatae facere optio repellat?</p>
           <Link to='/register'> <button>Go back register</button></Link>
        </Container>
    );
};

export default Terms;