const showFinal = document.getElementById('weather-body');
const getBody = document.querySelector('body');

function AppData() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  }

  function showPosition(position) {
    const { latitude, longitude } = position.coords;
    Api(latitude, longitude);
  }
}

function Api(latitude,longitude) {
 apiKey="ec75e45bc92eb0f627a98f425f69e873";
 api="https://api.openweathermap.org/data/2.5/weather?lat=latitude&lon=longitude&appid=apiKey";
 first ="https://api.openweathermap.org/data/2.5/weather?lat=";
 second="&lon=";
 third="&appid=";
 API= first+latitude+ second+longitude+third+apiKey;

  Data(API);
}
async function Data(APi){
 url = await fetch(APi);
 DataApi = await url.json();
 showData(DataApi);
}

function showData(DataWeather) {
  const { main, wind, sys, weather } = DataWeather;
  const finalTemp = parseInt(main.feels_like - 273.15);
  const imageicon = weather[0].icon;

  showFinal.innerHTML = `
    <div class="city-name">
      <h3 class="text-white">${DataWeather.name}</h3>
    </div>
    <div class="weather-icon">
      <img src="http://openweathermap.org/img/wn/${imageicon}@2x.png" alt="">
    </div>
    <div class="weather-main">
      <h3 class="text-white">${weather[0].main}</h3>
    </div>
    <div class="weather-data">
      <h3 class="text-white">${finalTemp}<sup>&#176</sup>C</h3>
    </div>
    <div class="weather-description">
      <h3 class="text-white">${weather[0].description}</h3>
    </div>
    <div class="weather-humidity">
      <h5 class="text-white">Humidity - ${main.humidity}</h5>
    </div>
    <div class="weather-wind">
      <h5 class="text-white">Wind-Speed - ${wind.speed}</h5>
    </div>
  `;
}
