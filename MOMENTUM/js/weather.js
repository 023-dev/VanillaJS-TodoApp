const API_KEY = "ce26ca47b23d1536394e01828d833481"

function onGoeOk(position){
    const lat = position.coords.latitude
    const lon = position.coords.longitude
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const city = document.querySelector("#weather span:nth-child(2)")
            const temperature = document.querySelector("#weather span:last-child")
            const weather = document.querySelector("#weather span:nth-child(3)")
            const icon = document.querySelector("#weather img:first-child")
            const cityName = data.name
            const cityWeather = data.weather[0].main
            const cityTemperature = data.main.temp
            const weatherId = data.weather[0].icon
            city.innerText = cityName
            //weather.innerText = cityWeather
            temperature.innerText = cityTemperature + "℃"
            icon.src = `http://openweathermap.org/img/wn/${weatherId}@2x.png`
        })
        //https://samples.openweathermap.org/data/2.5/find?q=London&appid=b1b15e88fa797225412429c1c50c122a1r
}
function onGoeErr(){
    alert("Con't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGoeOk, onGoeErr)

console.log(fetch(`http://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=${API_KEY}`).then(response => response.json()))