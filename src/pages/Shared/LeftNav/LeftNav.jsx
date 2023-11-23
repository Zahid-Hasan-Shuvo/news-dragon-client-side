import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://the-daily-dragon-news-react-server-e7a6d3ii5.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <h4 className="fw-bold">All Category</h4>
    <div >
    {categories.map((category) => (
        <p key={category.id}>
          <Link className="text-decoration-none text-black " to={`/category/${category.id}`}> {category.name} </Link>
        </p>
      ))}
    </div>
    </div>
  );
};

export default LeftNav;
