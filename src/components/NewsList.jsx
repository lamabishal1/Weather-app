import React from 'react';
import NewsCard from './NewsCard';

const NewsList = ({ articles }) => {
  return (
    <div className="news-list flex flex-wrap justify-center mt-3">
      {articles.map((article, index) => (
        <NewsCard key={index} article={article} />
      ))}
    </div>
  );
};

export default NewsList;
