<<<<<<< HEAD
import { useState, useEffect } from 'react'
import axios from 'axios';
import Header from './components/Header.jsx'
import WeatherCard from './components/WeatherCard.jsx'
import './App.css'

function App() {
  const [selectedPrefecture, setSelectedPrefecture] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    const fetchWeather = async () => {
      if (!selectedPrefecture) return;
      setLoading(true);
      try{
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather`,
          {
            params:{
              q: `${selectedPrefecture},JP`,
              appid: import.meta.env.VITE_WEATHER_API_KEY,
              units:'metric',
              lang:'ja'
            },
          });
          setWeather(response.data);
        }catch (error){
          console.error("天気情報の取得に失敗しました", error);
          setWeather(null);
        
      }finally {
        setLoading(false);
      }
      };
      fetchWeather();
    }, [selectedPrefecture]);


  return (
    <>
      <div className='text-center p-4'>
          <Header onSelect={setSelectedPrefecture} />
          {loading ? (
            <p>Loading...</p>
          ) : (
             weather && <WeatherCard weather={weather} />
             )}

       </div>
       </>
  )

}

=======
import React ,{ useState, useEffect } from 'react'
import axios from 'axios';
import Header from './components/Header.jsx'; 
import NewsList from './components/NewsList.jsx'
import Loader from "./components/Loader.jsx"
import './App.css'

function App() {
  const [category, setCategory] = useState('general');
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const fetchNews = async () => {
    setLoading(true);
    try{

      const response = await axios.get(`https://newsapi.org/v2/top-headlines`,{
        params:{
          category: category,
          country:'us',
          apikey:import.meta.env.VITE_API_KEY,          
        },        
      });
      setArticles(response.data.articles);
    }catch(error){
      console.log('Error fetching news:', error);
    }
    setLoading(false);
  };

  const handleCategoryChange = (newCategory) => {
    if (newCategory === category){
      setCategory('');
      setCategory(newCategory);
    }else{
      setCategory(newCategory);
    }
  };

  useEffect(() => {
    fetchNews();
  }, [category]);

  return (
    <>
    <div>
        <Header setCategory={handleCategoryChange}/>
        {loading ? (
         <Loader />
        ) : articles.length === 0 ? (
            <p>No news available for this category.</p>
          ) : (
         <NewsList articles={articles} />)}        
          </div>
    </>
  );
}
>>>>>>> a371d5a339c4afa4005f2bcb7546d1742a659e67
export default App
