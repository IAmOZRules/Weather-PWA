import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '36813ff31634b228e433ead73457fc5c';

export const fetchWeather = async (query) => {
    try {
        const { data } = await axios.get(URL, {
            params: {
                q: query,
                units: 'metric',
                APPID: API_KEY,
            }
        });
        return data;

    } catch (error) {
        const data = "ERROR";
        return data;
    }
}