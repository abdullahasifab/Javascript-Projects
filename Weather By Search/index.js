    container = document.querySelector('.container');
    search = document.querySelector('.search-box button');
    weatherBox = document.querySelector('.weather-box');
    weatherDetails = document.querySelector('.weather-details');
    error404 = document.querySelector('.not-found');
    search.addEventListener('click', () => {
    APIKey = 'ec75e45bc92eb0f627a98f425f69e873';
    city = document.querySelector('.search-box input').value;
    if (city === '')
        return;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
        .then(response => response.json())
        .then(json => {  if (json.cod === '404') 
        {
            container.style.height = '400px';
            weatherBox.style.display = 'none';
            weatherDetails.style.display = 'none';
            error404.style.display = 'block';
            error404.classList.add('fadeIn');
            return;  
        }
            error404.style.display = 'none';
            error404.classList.remove('fadeIn');
            image = document.querySelector('.weather-box img');
            temperature = document.querySelector('.weather-box .temperature');
            description = document.querySelector('.weather-box .description');
            humidity = document.querySelector('.weather-details .humidity span');
            wind = document.querySelector('.weather-details .wind span');
            switch (json.weather[0].main) 
        {
                case 'Clear':
                    image.src = 'images/clear.png';
                    break;
                case 'Rain':
                    image.src = 'images/rain.png';
                    break;
                case 'Snow':
                    image.src = 'images/snow.png';
                    break;
                case 'Clouds':
                    image.src = 'images/cloud.png';
                    break;
                case 'Haze':
                    image.src = 'images/mist.png';
                    break;
                default:
                    image.src = ''; 
        }
            temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
            description.innerHTML = `${json.weather[0].description}`;
            humidity.innerHTML = `${json.main.humidity}%`;
            wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;
            weatherBox.style.display = '';
            weatherDetails.style.display = '';
            weatherBox.classList.add('fadeIn');
            weatherDetails.classList.add('fadeIn');
            container.style.height = '590px';
        });
    });