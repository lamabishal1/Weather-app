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
export default App
