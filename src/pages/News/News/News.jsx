import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import EditorsInside from '../EditorsInside/EditorsInside';

const News = () => {
    const news=useLoaderData()
    const { _id, title, details, image_url,category_id } = news;
    return (
      <div>
          <Card>
        <Card.Img variant="top" src={image_url}/>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
           {details}
          </Card.Text>
        <Link to={`/category/${category_id}`}>  <Button className='text-danger'>All the news category</Button></Link>
        </Card.Body>
      </Card>
      <EditorsInside></EditorsInside>
      </div>
    );
};

export default News;