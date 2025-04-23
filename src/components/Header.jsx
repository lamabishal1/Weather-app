import React from 'react';

const Header = ({ setCategory }) => {
  return (
    <div className='App text-center m-3' style={{ cursor: 'default' }}>
      <h1 className=' border bg-white rounded-full p-2 font-bold'>News Feed</h1>
      <div className="category-selector border my-2 font-bold bg-[#EEE3CB] p-2">
        <button className='border rounded-full
         transition-transform duration-200 
         hover:-translate-y-1 hover:scale-105' 
         style={{ cursor: 'default' }} 
         onClick={() => setCategory('general')}>General</button>
        <button className='border rounded-full
        transition-transform duration-200 
        hover:-translate-y-1 hover:scale-105' 
        style={{ cursor: 'default' }} 
        onClick={() => setCategory('business')}>Business</button>
        <button className='border rounded-full
        transition-transform duration-200 
        hover:-translate-y-1 hover:scale-105' 
        style={{ cursor: 'default' }} 
        onClick={() => setCategory('technology')}>Technology</button>
        <button className='border rounded-full
        transition-transform duration-200 
        hover:-translate-y-1 hover:scale-105' 
        style={{ cursor: 'default' }} 
        onClick={() => setCategory('sports')}>Sports</button>
      </div>
    </div>
  );
};

export default Header;
