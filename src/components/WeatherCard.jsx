import React from 'react'

const WeatherCard = ({weather}) => {
  return (
    <div className='max-w-sm mx-auto mt-6 p-4 rounded shadow bg-white 
    border-2 border-black w-[500px] h-[350px]'>
        <h2 className='text-xl font-bold'>
          {weather.name}</h2>
        <p>🌡️ 気温: {weather.main.temp}°C</p>
        <p>☁️ 天気: {weather.weather[0].description}</p>
        <p>💨 風速: {weather.wind.speed} m/s</p>
        </div>
  )
}



export default WeatherCard