import { cityWeather } from "./data.js"

function renderBannerInfo(data){

    const cityClass = document.getElementsByClassName("city")[0]
    const dateClass = document.getElementsByClassName("day")[0]
    const tempClass = document.getElementsByClassName("temp")[0]

    cityClass.textContent = `${data.city}, ${data.country}`
    dateClass.textContent = data.date
    tempClass.textContent = `${data.temperature}°`

}

function renderDayInfo(data){

    const feelsLikeClass = document.getElementsByClassName("fl")[0]
    const humidityClass = document.getElementsByClassName("hu")[0]
    const windClass = document.getElementsByClassName("wd")[0]
    const precipitationClass = document.getElementsByClassName("pc")[0]

    feelsLikeClass.textContent = `${data.feelsLike}°`
    humidityClass.textContent = `${data.humidity}%`
    windClass.textContent = `${data.wind} km/h`
    precipitationClass.textContent = `${data.precipitation} mm`

}

function renderDaily(dailyData){

    const dailyContainer = document.getElementsByClassName("daily")[0]

    dailyContainer.innerHTML = ""

    dailyData.forEach(day => {

        const card = document.createElement("div")
        card.classList.add("daily-card")

        const dia = document.createElement("p")
        dia.textContent = day.day

        const icon = document.createElement("span")
        icon.textContent = day.icon

        const temp = document.createElement("p")
        temp.textContent = `${day.max}° / ${day.min}°`

        card.append(dia, icon, temp)

        dailyContainer.appendChild(card)

    })

}

function renderHourly(hourlyData){

    const hourlyContainer = document.getElementsByClassName("right")[0]

    hourlyData.forEach(hour => {

        const item = document.createElement("div")
        item.classList.add("hour-item")

        const left = document.createElement("div")
        left.classList.add("left-hourly")

        const icon = document.createElement("span")
        icon.textContent = "⏰"

        const time = document.createElement("span")
        time.textContent = hour.time

        left.append(icon, time)

        const right = document.createElement("div")
        right.classList.add("right-hourly")

        const temp = document.createElement("span")
        temp.textContent = `${hour.temp}°`

        right.appendChild(temp)

        item.append(left, right)

        hourlyContainer.appendChild(item)

    })

}

function init(data){

    renderBannerInfo(data)
    renderDayInfo(data)
    renderDaily(data.daily)
    renderHourly(data.hourly)

}

init(cityWeather)