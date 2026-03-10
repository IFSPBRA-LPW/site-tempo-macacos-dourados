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

function daily(dailyData){
    const dailyClass = document.getElementsByClassName("daily")
    dailyData.forEach(day => {
        const card = document.createElement("div")
        const name  = document.createElement("h3")
        const temp = document.createElement("p")
        name.textContent = day.day
        temp.textContent = day.temp
        card.append(name,temp)
        dailyClass.appendChild(card)
    })
}

function hourly(hourlyData){
    const hourlyClass = document.getElementsByClassName("right")
    hourlyData.forEach(hour =>{
        const item = document.createElement("div")
        const time = document.createElement("p")
        const temp2 = document.createElement("p")
        time.textContent = hour.hour
        time.textContent = hour.temp
        item.append(temp,time)
        hourlyClass.appendChild(item)

    })
}

function principal(cityWeather){
    banner(cityWeather.city,cityWeather.country,cityWeather.date)
    dayInfo(feelsLike.city,humidity.city,wind.city,precipitation.city)
    daily(dailyData)
    hourly(hourlyData)
}

principal(cityWeather)
