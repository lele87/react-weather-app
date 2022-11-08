import { StyledCurrentWeather } from "./StyledCurrentWeather";

const CurrentWeather = ({ weatherData }) => {
  return (
    <StyledCurrentWeather className="current__weather--container">
      <div className="current__weather--top">
        <div className="current__weather--properties">
          <p className="current__weather--city">{weatherData.city}</p>
          <p className="current__weather--description">
            {weatherData.weather[0].main.charAt(0).toUpperCase() +
              weatherData.weather[0].main.slice(1)}
          </p>
        </div>
        <img
          alt="weather"
          className="current__weather--icon"
          src={`icons/${weatherData.weather[0].icon}.png`}
        />
      </div>
      <div className="current__weather--bottom">
        <p className="current__weather--temperature">
          {Math.round(weatherData.main.temp)}&deg;C
        </p>
        <div className="current__weather--details">
          <div className="paremeter-row">
            <span className="paremeter-label">Min Temp</span>
            <span className="paremeter-label">
              {Math.round(weatherData.main.temp_min)}&deg;C
            </span>
          </div>
          <div className="paremeter-row">
            <span className="paremeter-label">Max Temp</span>
            <span className="paremeter-value">
              {Math.round(weatherData.main.temp_max)}
              &deg;C
            </span>
          </div>
          <div className="paremeter-row">
            <span className="paremeter-label">Wind</span>
            <span className="paremeter-value">
              {weatherData.wind.speed} m/s
            </span>
          </div>
          <div className="paremeter-row">
            <span className="paremeter-label">Humidity</span>
            <span className="paremeter-value">
              {weatherData.main.humidity}%
            </span>
          </div>
          <div className="paremeter-row">
            <span className="paremeter-label">Pressure</span>
            <span className="paremeter-value">
              {weatherData.main.pressure} hPa
            </span>
          </div>
        </div>
      </div>
    </StyledCurrentWeather>
  );
};

export default CurrentWeather;
