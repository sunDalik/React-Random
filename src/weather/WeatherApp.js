import React from "react";
import WeatherDisplayBlock from "./WeatherDisplayBlock";
import './weather.css';

function WeatherApp() {
    const [city, setCity] = React.useState("");
    const [days, setDays] = React.useState(0);
    const [weatherData, setWeatherData] = React.useState({});

    const key = "37076fc74766499ab0691736221607";

    const onSubmit = (e) => {
        e.preventDefault();
        fetch(`http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city}&days=${days}&aqi=no&alerts=no`)
            .then((data) => data.json())
            .then((json) => {
                setWeatherData(json);
                console.log(json);
            })
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={city} onChange={e => setCity(e.target.value)} placeholder="city" />
                <input value={days} onChange={e => setDays(e.target.value)} placeholder="days" />
                <button type="Submit">Submit</button>
            </form>

            {
                weatherData.location &&
                <div>
                    <h2>{weatherData.location.name}</h2>
                    <h3>Current weather</h3>
                    <WeatherDisplayBlock weatherData={weatherData.current} />

                    <h3>Forecast</h3>
                    <div class="flexbox_r">
                        {weatherData.forecast.forecastday.map((e, i) => <WeatherDisplayBlock weatherData={e.day} key={i} />)}
                    </div >
                </div >
            }

            {
                weatherData.error &&
                <h3 style={{ color: "red" }}>{weatherData.error.message}</h3>
            }
        </div>
    );
}

export default WeatherApp;
