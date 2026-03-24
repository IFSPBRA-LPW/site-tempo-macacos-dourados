import {API_KEY} from './config.js'
async function fetchWeather(city){
    const endereco = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=7&lang=pt` 
    console.log(endereco)
    const response = await fetch(
        endereco
    );
    if(!response.ok){
            throw new Error("Erro ao buscar dados da API")
    }
    const nome = await response.json()
    console.log(nome)
    return nome

}
export const objectCity = {
    city:"",
    country:"",
    date:"",
    icon:""

}



export async function criarTudo(){
    try{
        const objeto =  await fetchWeather()
    }catch (error){
        console.error("Erro ao processar cidades")
    }
    const diario = objeto.forecast.forecastday
    const horario = objeto.forecast.forecastday[0].hour
    const cityWeather = { 
    city: objeto.location.name,
    country: objeto.location.country, 
    date: objeto.location.localtime,
    icon: objeto.current.icon, 
    temperature:objeto.current.temp_c, 
    feelsLike:objeto.current.feelslike_c, 
    humidity:objeto.current.humidity, 
    wind: objeto.current.wind_kph,
    precipitation: objeto.current.precip_mm, 
    daily: [],
    hourly:[],
}
for(let i=0;i<diarios.length;i++){
    let dia = {day: }
}
// hourly: [ 
// { time: "3 PM", temp: 20 }, 
// { time: "4 PM", temp: 20 }, 
// { time: "5 PM", temp: 20 }, 
// { time: "6 PM", temp: 19 }, 
// { time: "7 PM", temp: 18 }, 
// { time: "8 PM", temp: 18 }, 
// { time: "9 PM", temp: 17 }, 
// { time: "10 PM", temp: 17 }, 
// ], 
};
console.log(cityWeather)
function dayWeek(dia){
    let dias=['dom','seg','ter','qua','qui','sex','sab']
    const data = new Date(dia + "T12:00:00")
    return dias[data.getDay()]
}

