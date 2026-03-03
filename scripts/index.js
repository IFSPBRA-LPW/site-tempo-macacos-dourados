import { cityWeather } from "./data.js";

// console.log(cityWeather);


function banner(city, country, date, icon, temperature){
    const cityClass = document.getElementsByClassName("city")
    cityClass[0].textContent = `${city}, ${country}`
    const dateClass = document.getElementsByClassName("day")
    dateClass[0].textContent = `${date}`


}

function dayInfo(feelsLike, humidity, wind, precipitation){

}

function daily( day, icon, max, min){

}

function hourly(time, temp){

}

function principal(cityWeather){
    banner(cityWeather.city,cityWeather.country)
}

principal(cityWeather)
