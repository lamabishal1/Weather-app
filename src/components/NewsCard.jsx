import React from 'react';

const NewsCard = ({ article }) => {
  return (
    <div className="news-card w-[250px] m-[15px] p-[15px] 
    border border-solid-[#ddd] rounded-[5px]
    bg-white shadow-md mt-3">
      <img className="w-full h-[150px] object-cover" src={article.urlToImage} alt={article.title}  />
      <h2 className='font-bold cursor-pointer'>{article.title}</h2><br/>
      <p>{article.description}</p>
      <a className='text-[#007bff] no-underline' href={article.url} target="_blank" rel="noopener noreferrer">
        Read more
      </a>
    </div>
  );
};

export default NewsCard;
