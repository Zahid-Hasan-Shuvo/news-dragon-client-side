import React from "react";
import { Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import moment from "moment/moment";
import { FaBeer, FaBookmark, FaEye, FaShare, FaStar } from "react-icons/fa";
import Rating from "react-rating";

const NewsCard = ({ news }) => {
  const { _id, title, details, image_url, author,total_view,rating } = news;
  return (
    <Card className="mb-4">
      <Card.Header className="d-flex align-items-center ">
        <Image style={{ height: "40px" }} src={author?.img} roundedCircle />
        <div className="ps-2 flex-grow-1 ">
          <p>{author?.name}</p>
          <p>
            <small>{moment(author?.published_date).format("YYYY-MM-D")}</small>
          </p>
        </div>

        <div className="d-flex">
          <FaBookmark />
          <FaShare />
        </div>
      </Card.Header>

      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {details.length < 250 ? (
            <>{details}</>
          ) : (
            <>
              {details.slice(0, 250)}...{" "}
              <Link to={`/news/${_id}`}>Read more..</Link>
            </>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted d-flex">
      <Rating
  placeholderRating={rating.number}
  emptySymbol={<FaStar></FaStar>}
  placeholderSymbol={<FaStar className="text-warning"></FaStar>}
  fullSymbol={<FaStar></FaStar>}
/>
<div className="flex-grow-1">
    {rating?.number}
</div>

     <div>
     <FaEye />
      {
        total_view
      }

     </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsCard;
