import './weather.css';

function WeatherDisplayBlock({ weatherData }) {
    return (
        <div class="outer">
            <div class="flexbox">
                <img src={weatherData.condition.icon} />
                <div>{weatherData.condition.text}</div>
                {weatherData.temp_c !== undefined && <div>{weatherData.temp_c}C</div>}
                {weatherData.avgtemp_c !== undefined && <div>{weatherData.avgtemp_c}C</div>}
            </div>
        </div >
    );
}

export default WeatherDisplayBlock;
