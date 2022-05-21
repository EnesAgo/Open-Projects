import React, { useRef, useState } from 'react';
import '../css/weatherapp-css.css';


function WeatherApp(){

  const api_key = '2fdc46e72ab84dde2fa982129f52f961';
  const city = useRef('______');
  const [cityName, setCityName] = useState('London');
  const [temp, setTemp] = useState(0);
  const [weatherstatus, setWeatherstatus] = useState('______');
  const [icon, setIcon] = useState('01n');
  const [humidity, setHumidity] = useState(0);
  const [windspeed, setWindspeed] = useState(0);

  function getcityname() {    
    setCityName(city.current.value);
  }

  function fetchdata() {

      if(!isNaN(cityName)){
        alert('please write the city name correctly!')
      }
      else{
        const api_uri = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${api_key}&units=metric`;

        async function getweather(){
          const response = await fetch(api_uri);
          const data = await response.json();

          setTemp(data['main']['temp']);
          setWeatherstatus(data['weather'][0]['main']);
          setIcon(data['weather'][0]['icon']);
          setHumidity(data['main']['humidity']);
          setWindspeed(data['wind']['speed']);
        }
        getweather().catch(err => alert(`please write the city name correctly!`));
      }
    }



  return (
    <div className="weatherapp">

          <div className="weatherApp-box">

            <h1>Weather</h1>

            <input type="text" onChange={getcityname} ref={city} placeholder="city-name" /> <br />
            <button type="submit" onClick={fetchdata}>submit</button> <br />

            <div className="weatherApp-info-box">

              <h3>Weather in {cityName}</h3>
              <h2>{temp}C°</h2>
              <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather icon" />
              <h2>{weatherstatus}</h2>
              <h2>Humidity {humidity}%</h2>
              <h2>Wind speed: {windspeed} km/h</h2>

            </div>

          </div>
    </div>
  );
}

export default WeatherApp;
