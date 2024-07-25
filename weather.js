const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const apiKey = '6cee58ee32b305b4b19e058a86fff4a4';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=`;
const weather_icon = document.querySelector(".weather_icon");
var bgimage = document.getElementById('body').style;
async function checkWeather(city) {
    try {
        const response = await fetch(`${apiUrl}${city}&appid=${apiKey}&units=metric`);
        if (!response.ok) {
            throw new Error('City not found or API request failed');
        }
        const data = await response.json();
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".type").innerHTML = data.weather[0].main;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if ((data.weather[0].main == "Rain")||(data.weather[0].main == "Drizzle")){
            bgimage.backgroundImage = "url('images/rainbg.jpg')";
            bgimage.backgroundRepeat = 'no-repeat';
            bgimage.backgroundSize = 'cover';
        }
        else if (data.weather[0].main == "Clouds"){
            bgimage.backgroundImage = "url('images/cloudbg.jpeg')";
            bgimage.backgroundRepeat = 'no-repeat';
            bgimage.backgroundSize = 'cover';
        }
        else if (data.weather[0].main == "Clear"){
            bgimage.backgroundImage = "url('images/clearbg.jpg')";
            bgimage.backgroundRepeat = 'no-repeat';
            bgimage.backgroundSize = 'cover';
        }
        else if (data.weather[0].main == "Snow"){
            bgimage.backgroundImage = "url('images/snowbg.jpeg')";
            bgimage.backgroundRepeat = 'no-repeat';
            bgimage.backgroundSize = 'cover';
        }
        else if (data.weather[0].main == "Fog"){
            bgimage.backgroundImage = "url('images/fogbg.jpeg')";
            bgimage.backgroundRepeat = 'no-repeat';
            bgimage.backgroundSize = 'cover';
        }
        else if ((data.weather[0].main == "Mist")||(data.weather[0].main == "Haze")){
            bgimage.backgroundImage = "url('images/mistbg.png')";
            bgimage.backgroundRepeat = 'no-repeat';
            bgimage.backgroundSize = 'cover';
        };
        if (data.weather[0].main == "Clouds"){
            weather_icon.src="images/clouds.png";
        }
        else if (data.weather[0].main == "Clear"){
            weather_icon.src="images/clear.png";
        }
        else if ((data.weather[0].main == "Mist")||(data.weather[0].main == "Haze")){
            weather_icon.src="images/mist.png";
        }
        else if (data.weather[0].main == "Snow"){
            weather_icon.src="images/snow.png";
        }
        else if (data.weather[0].main == "Rain"){
            weather_icon.src="images/rain.png";
        }
        else if (data.weather[0].main == "Drizzle"){
            weather_icon.src="images/drizzle.png";
        }
        else if (data.weather[0].main == "Fog"){
            weather_icon.src="images/fog.png";
        }

        document.querySelector(".weather").style.display="block";
    } catch (error) {
        document.querySelector(".city").innerHTML = 'Error';
        document.querySelector(".type").innerHTML = '';
        document.querySelector(".temp").innerHTML = '';
        document.querySelector(".humidity").innerHTML = '';
        document.querySelector(".wind").innerHTML = '';
        console.error('Error fetching weather data:', error);
    }
}
searchBtn.addEventListener("click", () => {
    const city = searchBox.value;
    if (city) {
        checkWeather(city);
    } else {
        alert('Please enter a city name');
    }
});