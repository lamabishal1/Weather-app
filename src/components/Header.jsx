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
  </div>
)};

export default Header;
