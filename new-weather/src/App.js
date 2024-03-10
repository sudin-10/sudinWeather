import "./App.css";
import { useState } from "react";

const api = {
  key: "dd94f859a0e52d6e4767fddf735f04a7",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  /*
    Search button is pressed. Make a fetch call to the Open Weather Map API.
  */
  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* HEADER  */}
        <h1>Weather App Using React</h1>

        {/* Search Box - Input + Button  */}
        <div>
          <input
            type="text"
            placeholder="Enter city/town..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={searchPressed}>Search</button>
        </div>
        <div className="container">
<div className="top">
  <div className="description">
    <div className="bottom">
        {/* If weather is not undefined display results from API */}
        {typeof weather.main !== "undefined" ? (
          <div >
            {/* Location  */}
            <p className="place">{weather.name}</p>

            {/* Temperature Celsius  */}
            <p className="temp">{weather.main.temp}°C</p>

            {/* Condition (Sunny ) */}
            <p className="sunny">{weather.weather[0].main}</p>
            <p>({weather.weather[0].description})</p>
          </div>
          
        ) : (
          ""
        )}
        </div>
        </div>
        </div>
        </div>
      </header>
      
    </div>
  );
}

export default App;
