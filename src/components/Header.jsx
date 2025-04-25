<<<<<<< HEAD
import React from 'react'
import { prefectures } from '../data/prefectures'

const Header = ({onSelect}) => {
  return (
    <div className='text-center my-4'>
    <h1 className='text-3xl font-bold mb-2'>日本天気</h1>
    <label htmlFor='prefecture-select' className='block mb-2'>都道府県を選択</label>
    <select 
    id='prefecture-select'
    name='prefecture'
    onChange={(e) => onSelect(e.target.value)} 
    className='p-2 rounded'>
    <option value="">-- 選んでください</option>
    {prefectures.map((pref,idx) => (
        <option key={idx} value={pref}>{pref}</option>
    ))}
    </select>
=======
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
>>>>>>> a371d5a339c4afa4005f2bcb7546d1742a659e67
    </div>
  );
};

<<<<<<< HEAD
export default Header
=======
export default Header;
>>>>>>> a371d5a339c4afa4005f2bcb7546d1742a659e67
