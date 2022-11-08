import StyledForecast from "./StyledForecast";

const weekDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forecast = ({ forecastData }) => {
  const currentDay = new Date().getDay();
  const forecastDays = weekDays
    .slice(currentDay, weekDays.length)
    .concat(weekDays.slice(0, currentDay));

  return (
    <>
      <StyledForecast>
        <label className="title">Daily</label>
        <ul>
          {forecastData.list.splice(0, 7).map((item, index) => {
            return (
              <li key={index}>
                <div className="daily-item">
                  <img
                    alt="weather-icon"
                    className="small-icon"
                    src={`icons/${item.weather[0].icon}.png`}
                  />
                  <label className="day">{forecastDays[index]}</label>
                  <label className="description">
                    {item.weather[0].main.charAt(0).toUpperCase() +
                      item.weather[0].main.slice(1)}
                  </label>
                  <p className="min-max">
                    {Math.round(item.main.temp)}&deg;C /
                    {Math.round(item.main.temp_max)}&deg;C
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </StyledForecast>
    </>
  );
};

export default Forecast;
