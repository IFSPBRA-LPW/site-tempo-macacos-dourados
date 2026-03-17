export {API_KEY} from './config.js'
async function fetchWeather(city){
    const response = await fetch(
        ``,
    );
    if(!response.ok){
        throw new Error("Erro ao buscar dados da API")
    }
    return response.json()
}

export const objectCity = {
    city:"",
    country:"",
    date:"",
    icon:""

}


export const cityWeather = { 
city: "Paris", 
country: "Germany", 
date: "Tuesday, Aug 5, 2025", 
icon: ["fa-regular", "fa-sun"], 
temperature: 20, 
feelsLike: 18, 
humidity: 46, 
wind: 14, 
precipitation: 0, 
daily: [ 
{ day: "Tue", icon: ["fa-regular", "fa-sun"], max: 20, min: 14 }, 
{ day: "Wed", icon: ["fa-solid","fa-temperature-high"], max: 21, min: 15 }, 
{ day: "Thu", icon: ["fa-solid","fa-cloud-bolt"], max: 24, min: 14 }, 
{ day: "Fri", icon: ["fa-solid","fa-sun"], max: 25, min: 13 }, 
{ day: "Sat", icon: ["fa-solid","fa-cloud-sun"], max: 21, min: 15 }, 
{ day: "Sun", icon: ["fa-regular","fa-cloud"], max: 25, min: 16 }, 
{ day: "Mon", icon: ["fa-solid","fa-droplet"], max: 24, min: 15 }, 
], 
hourly: [ 
{ time: "3 PM", temp: 20 }, 
{ time: "4 PM", temp: 20 }, 
{ time: "5 PM", temp: 20 }, 
{ time: "6 PM", temp: 19 }, 
{ time: "7 PM", temp: 18 }, 
{ time: "8 PM", temp: 18 }, 
{ time: "9 PM", temp: 17 }, 
{ time: "10 PM", temp: 17 }, 
], 
};

