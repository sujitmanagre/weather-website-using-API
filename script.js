// api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}

const weatherApi = {
    key: "d7a7cf2e4cb2920a8c929856826e800f",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather",
}

const searchInputBox = document.getElementById('input-box');

// Event Listener Function on keypress
searchInputBox.addEventListener('keypress', (event) => {

    if(event.keyCode == 13) {
        console.log(searchInputBox.value);
        getWeatherReport(searchInputBox.value);
        document.querySelector('.weather-body').style.display = "block";
    }

});

// Get Weather Report
function getWeatherReport(city) {
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather => {
        return weather.json();
    }).then(showWeatherReport);
}

// Show Weather Report
function showWeatherReport(weather){
    console.log(weather);

    let city = document.getElementById('city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let temperature = document.getElementById('temp');
    temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

    let minMaxTemp = document.getElementById('min-max');
    minMaxTemp.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C (min)/ ${Math.ceil(weather.main.temp_max)}&deg;C (max) `;

    let weatherType = document.getElementById('weather');
    weatherType.innerText = `${weather.weather[0].main}`;

    let weatherIcon = document.getElementById('weather-icon');

    let date = document.getElementById('date');
    let todayDate = new Date();
    date.innerText = dateManage(todayDate);


    if(weatherType.textContent == 'Clear') {
        document.body.style.backgroundImage = "url('images/clear.jpg')";
        weatherIcon.src = './icons/clear.png';

    } else if(weatherType.textContent == 'Clouds') {

        document.body.style.backgroundImage = "url('images/cloud.jpg')";
        weatherIcon.src = './icons/clouds.png';

    } else if(weatherType.textContent == 'Haze') {

        document.body.style.backgroundImage = "url('images/haze.jpg')";
        weatherIcon.src = './icons/mist.png';

    } else if(weatherType.textContent == 'Rain') {

        document.body.style.backgroundImage = "url('images/rain.jpg')";
        weatherIcon.src = './icons/rain.png';

    } else if(weatherType.textContent == 'Drizzle') {

        document.body.style.backgroundImage = "url('images/drizzle.jpg')";
        weatherIcon.src = './icons/rain.png';

    } else if(weatherType.textContent == 'Snow') {

        document.body.style.backgroundImage = "url('images/snow.jpg')";
        weatherIcon.src = './icons/snow.png';

    } else if(weatherType.textContent == 'Thunderstorm') {

        document.body.style.backgroundImage = "url('images/thunderstorm.jpg')";
        weatherIcon.src = './icons/storm.png';

    } else if(weatherType.textContent == 'Mist') {

        document.body.style.backgroundImage = "url('images/mist.jpg')";
        weatherIcon.src = './icons/mist.png';

    }
}

// Date manage
function dateManage(dateArg) {

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date = dateArg.getDate();
    let day = days[dateArg.getDay()];

    return `${date} ${month} (${day}), ${year}`;
}
