import { cityWeather } from "./data.js"

function banner(city, country, date, icon, temperature){
    const cityClass = document.getElementsByClassName("city")
    cityClass[0].textContent = `${city}, ${country}`
    const dateClass = document.getElementsByClassName("day")
    dateClass[0].textContent = `${date}`
    const iconClass = document.getElementsByClassName("icon")
    iconClass[0].textContent = `${icon}`
    const temperatureClass = document.getElementsByClassName("temp")
    temperatureClass[0].textContent = `${temperature}`
}

function dayInfo(feelsLike, humidity, wind, precipitation){
    const feelsLikeClass = document.getElementsByClassName("fl")
    const humidityClass = document.getElementsByClassName("hu")
    const windClass = document.getElementsByClassName("wd")
    const precipitationClass = document.getElementsByClassName("pc")
    feelsLikeClass[0].textContent = `${feelsLike}`
    humidityClass[0].textContent = `${humidity}`
    windClass[0].textContent = `${wind}`
    precipitationClass[0].textContent = `${precipitation}`
}

function daily( day, icon, max, min){

}

function hourly(time, temp){

}

function principal(cityWeather){
    banner(cityWeather.city,cityWeather.country,cityWeather.date)
}

principal(cityWeather)
