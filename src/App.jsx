import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'

import "leaflet/dist/leaflet.css";
import WeatherData from "./components/WeatherData";

const Map = ({ lat, lon }) => {
  function FlyMapTo() {

    const map = useMap()

    useEffect(() => {
        map.setView([lat, lon])
    }, [lat,lon])

    return null
  }

  
  return (
    <>
      <div className="h-screen w-screen absolute z-[-50] backdrop-blur-sm"></div>
      <div className="absolute h-screen w-screen z-[-10]">
        <MapContainer 
          className="h-full w-full" 
          center={[lat, lon]} 
          zoom={13} 
          scrollWheelZoom={false} 
          dragging={true}
          >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <FlyMapTo />
        </MapContainer>
      </div>
    </>
  )
}

const App = () => {

  const [cityName, setCityName] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  
  async function handleWeatherClick() {
    const rawData = await fetch(`https://api.openweathermap.org/data/2.5/weather?appid=a449cd86ca443a821e0e70942068e1e1&q=${cityName}`);

    if ( rawData.status == 404 ) {
      setWeatherData(null);
      toast.error("Couldn't find location")
      return;
    }

    const data = await rawData.json();

    setWeatherData(data);
  }
  
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <div className="flex gap-2 mb-10">
        <input 
          value={cityName}
          onChange={e => setCityName(e.target.value)}
          type="text" 
          placeholder="Search for a place"
          className="border-2 px-3 py-2 rounded-lg border-blue-500"
          />

        <button
          className="bg-blue-500 rounded-lg text-white font-semibold px-4"
         onClick={handleWeatherClick}>Find weather</button>
      </div>
      <br />
      { weatherData && <WeatherData data={weatherData} />}
      
      <Map 
        lat={weatherData == null ? 0 : weatherData.coord.lat} 
        lon={weatherData == null ? 0 : weatherData.coord.lon} 
      />

    </div>
  );
}

export default App;