const apiKey = "d27c4827dbd5ff951ab9d2b245738e12";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");
    const weatherIcon= document.querySelector(".wheather-icon")

    async function checkWeather(city){
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    
    let data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h"; 
    if(data.weather[0].main == "clouds"){
        weatherIcon.src = "images/clouds.png";
    }
    else if(data.weather[0].main == "clear"){
weatherIcon.src = "images/clear.png";
    }
    else if(data.weather[0].main == "rain"){
        weatherIcon.src = "images/rain.png";
            }
            else if(data.weather[0].main == "Drizzle"){
                weatherIcon.src = "images/drizzle.png";
                    }
}
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
});
