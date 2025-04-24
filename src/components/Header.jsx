import React from 'react';

const Header = ({ setCategory }) => {
  return (
    <div className='App text-center m-3' style={{ cursor: 'default' }}>
      <h1 className=' bg-white p-2 font-bold text-2xl'>News Feed</h1>
      <div className="category-selector my-2 font-bold bg-[#FFFFFF] p-2">
        <button className='border border-blue-600 rounded-full
         transition-transform duration-200 
         hover:-translate-y-1 hover:scale-105' 
         style={{ cursor: 'default' }} 
         onClick={() => setCategory('general')}>General</button>
        <button className='border border-blue-600 rounded-full
        transition-transform duration-200 
        hover:-translate-y-1 hover:scale-105' 
        style={{ cursor: 'default' }} 
        onClick={() => setCategory('business')}>Business</button>
        <button className='border border-blue-600 rounded-full
        transition-transform duration-200 
        hover:-translate-y-1 hover:scale-105' 
        style={{ cursor: 'default' }} 
        onClick={() => setCategory('technology')}>Technology</button>
        <button className='border border-blue-600 rounded-full
        transition-transform duration-200 
        hover:-translate-y-1 hover:scale-105' 
        style={{ cursor: 'default' }} 
        onClick={() => setCategory('sports')}>Sports</button>
      </div>
    </div>
  );
};

export default Header;
