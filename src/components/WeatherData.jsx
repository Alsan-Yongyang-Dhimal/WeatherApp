import WeatherDetail from "./WeatherDetail";
import { GiPressureCooker } from "react-icons/gi";
import { WiHumidity } from "react-icons/wi";

const WeatherData = ({ data }) => {
    return (
      <div className="flex flex-col items-center">
        <div className="flex flex-row items-center">
          <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`} alt="Weather logo" />
  
          <div className="flex flex-col">
            <div
              className="text-5xl font-semibold text-slate-600 mb-3"
            >{data.weather[0].main}</div>
  
            <WeatherDetail
              icon={WiHumidity}
              content={`${data.main.humidity} %`}
            />
            <WeatherDetail
              icon={GiPressureCooker}
              content={`${data.main.pressure} pa`}
            />
          </div>
          
        </div>
        <div className="flex items-center gap-2">
          <div className="flex flex-col">
            <span
              className="text-4xl font-bold text-gray-400"
            >{ data.main.temp_min }K</span>
            <span className="text-xs">Min. Temperature</span>
          </div>
          <div className="w-40 h-1 bg-gradient-to-r from-blue-500 to-orange-500"></div>
          
          <span
            className="text-3xl font-bold"
          >{ data.main.temp }K</span>
          
          <div className="w-40 h-1  bg-gradient-to-r from-orange-500 to-red-500"></div>
  
          <div className="flex flex-col">
            <span
              className="text-4xl font-bold text-gray-400"
            >{ data.main.temp_max }K</span>
            <span className="text-xs">Max. Temperature</span>
          </div>
        </div>
      </div>
    );
  }

export default WeatherData;