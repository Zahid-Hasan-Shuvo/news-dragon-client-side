import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../newsCard/newsCard';

const Category = () => {

    const categoryNews=useLoaderData()
    return (
        <div>
   
      {
  categoryNews.map(news=><NewsCard key={news._id} news={news}></NewsCard>)
      }
        </div>
    );
};

export default Category;