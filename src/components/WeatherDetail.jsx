const WeatherDetail = ({ icon: IconComponent, content}) => {
    return (
      <div className="flex gap-2 items-center">     
        <IconComponent size={25} /> 
        <span className="text text-md font-semibold">
          {content}
        </span>
      </div>
    );
  }
  
export default WeatherDetail;