import React from 'react'

const WeatherCard = ({weather}) => {
  return (
    <div className='max-w-sm mx-auto mt-6 p-6 rounded-lg shadow
     bg-white border border-[#CCCCCC] w-[90%] md:w-[500px]'>
        <h2 className='ext-2xl font-bold text-[#1976D2]'>
          {weather.name}</h2>
        <p className="mt-2">🌡️ 気温: {weather.main.temp}°C</p>
        <p>☁️ 天気: {weather.weather[0].description}</p>
        <p>💨 風速: {weather.wind.speed} m/s</p>
        </div>
  )
}



export default WeatherCard