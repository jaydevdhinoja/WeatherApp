import axios from 'axios';

const API_KEY = '1884e90851a47ea82adb32e67409574a'
export const FETCH_WEATHER = 'FETCH_WEATHER';
const WEATHER_APIURL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

//middleware action creator
export function fetchWeather(city){

    //API Call
    //fetch data from weather API
    const url = `${WEATHER_APIURL}&q=${city},GB`;
    const request = axios.get(url);

    return{
        type:FETCH_WEATHER,
        payload:request
    }
}