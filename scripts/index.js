import { cityWeather } from "./data.js"

function banner(city, country, date, temperature){
    const cityClass = document.getElementsByClassName("city")
    cityClass[0].textContent = `${city}, ${country}`
    const dateClass = document.getElementsByClassName("day")
    dateClass[0].textContent = `${date}`
    const iconClass = document.createElement("i")
    /*iconClass.classList.add(cityWeather.icon, "icon")*/
    console.log(cityWeather.icon.split(" "))
    const temperatureClass = document.getElementsByClassName("temp")
    temperatureClass[0].textContent = `${temperature}` + "°"
    console.log(temperatureClass)
}

function dayInfo(feelsLike, humidity, wind, precipitation){
    const feelsLikeClass = document.getElementsByClassName("fl")
    const humidityClass = document.getElementsByClassName("hu")
    const windClass = document.getElementsByClassName("wd")
    const precipitationClass = document.getElementsByClassName("pc")
    feelsLikeClass[0].textContent = `${feelsLike}` + "°"
    humidityClass[0].textContent = `${humidity}` + "%"
    windClass[0].textContent = `${wind}` + " km/h"
    precipitationClass[0].textContent = `${precipitation}` + "mm"
}

function daily(dailyData){
    const dailyClass = document.getElementsByClassName("daily")
    console.log(dailyClass)
    dailyData.forEach(day => {
        const card = document.createElement("div")
        const dia = document.createElement("p")
        const icon = document.createElement("i")
        const tempMin = document.createElement("p")
        const tempMax = document.createElement("p")
        dia.textContent = day.day
        tempMin.textContent = day.min + "°"
        tempMax.textContent = day.max + "°"
        card.append(icon, tempMin, tempMax, dia)
        dailyClass[0].appendChild(card)
    })
}

function hourly(hourlyData){

    const hourlyClass = document.getElementsByClassName("right")
    hourlyData.forEach(hour =>{
        const item = document.createElement("div")
        const time = document.createElement("p")
        const temp2 = document.createElement("p")
        time.textContent = hour.time
        temp2.textContent = hour.temp + "°"
        item.append(temp2,time)
        hourlyClass[0].appendChild(item)

    })
}

function principal(cityWeather){

    banner(cityWeather.city,cityWeather.country,cityWeather.date, cityWeather.temperature)
    dayInfo(cityWeather.feelsLike, cityWeather.humidity, cityWeather.wind, cityWeather.precipitation)
    daily(cityWeather.daily)
    hourly(cityWeather.hourly)
}

principal(cityWeather)
