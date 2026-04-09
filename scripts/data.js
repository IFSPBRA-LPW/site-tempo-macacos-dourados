import {API_KEY} from './config.js'
async function fetchWeather(city){
    const endereco = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=7&lang=pt` 
    const response = await fetch(
        endereco
    );
    if(!response.ok){
            throw new Error("Erro ao buscar dados da API")
    }
    const nome = await response.json()
    return nome
}

export async function criarTudo(city){
    try{
    const objeto =  await fetchWeather(city)
    const diario = objeto.forecast.forecastday
    const horario = objeto.forecast.forecastday[0].hour
    const cityWeather = { 
    city: objeto.location.name,
    country: objeto.location.country, 
    date: objeto.location.localtime,
    icon: objeto.current.condition.icon, 
    temperature:objeto.current.temp_c, 
    feelsLike:objeto.current.feelslike_c, 
    humidity:objeto.current.humidity, 
    wind: objeto.current.wind_kph,
    precipitation: objeto.current.precip_mm, 
    daily: [],
    hourly:[]
}
for(let i=0;i<diario.length;i++){
    let dia = {day: dayWeek(diario[i].date), icon:diario[i].day.condition.icon, max: diario[i].day.maxtemp_c, min:diario[i].day.mintemp_c}
    cityWeather['daily'].push(dia)
}
for(let i = 15;i<22;i++){
    let hora = {
    time: `${i}h`,
    icon: `https:${horario[i].condition.icon}`,
    temp: horario[i].feelslike_c
    }
    cityWeather.hourly.push(hora)
}
return cityWeather
    }catch (error){
        console.error("Erro ao processar cidades")
    }
    
};

function dayWeek(dia){
    let dias=['dom','seg','ter','qua','qui','sex','sab']
    const data = new Date(dia + "T12:00:00")
    return dias[data.getDay()]
}

