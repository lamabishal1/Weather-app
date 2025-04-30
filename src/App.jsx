import { useState, useEffect } from 'react'
import axios from 'axios';
import Header from './components/Header.jsx'
import WeatherCard from './components/WeatherCard.jsx'
import Loader from './components/Loader.jsx';
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
      <div className="min-h-screen bg-[#FFFDF8]  text-[#B80000]">
      <div className="text-center py-6">
        <Header onSelect={setSelectedPrefecture} />
        {!selectedPrefecture && <p className="mt-4">都道府県を選択して天気を表示してください。</p>}
        {loading ? (
          <Loader />
        ) : (
          weather && <WeatherCard weather={weather} />
        )}
      </div>
    </div>
       </>
  )

}
export default App
