// const API_KEY = '8a79083123d8ef1d5ad73557ee563fc6';
const forecastDays = document.querySelectorAll('.forecast-day');

const lat = 37.980013031200656;
const lon = -122.0304017742663;
const URL = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${API_KEY}`;

async function apiFetch() {
    try {
        const response = await fetch(URL);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    const dailyForecasts = data.daily;
    for (let i = 0; i < 3; i++) {
        const forecast = dailyForecasts[i];
        const dayElement = forecastDays[i];
        const tempElement = dayElement.querySelector('.forecast-temp');
        const iconElement = dayElement.querySelector('.forecast-icon');
        const descElement = dayElement.querySelector('.forecast-description');
        const dateElement = dayElement.querySelector('.date');

        // Get the date from the forecast
        const date = new Date(forecast.dt * 1000);

        // Get the day and month from the date object
        const day = date.getDate();
        const month = date.getMonth() + 1; 

        // Display the date in the format "MM/DD"
        dateElement.textContent = `${month}/${day}`;

       // Set the text content of the h3 element
        if (i === 0) {
            dayElement.querySelector('h3').textContent = 'Today';
        } else if (i === 1) {
            dayElement.querySelector('h3').textContent = getWeekdayName(date.getDay());
        } else {
            dayElement.querySelector('h3').textContent = getDayAfterTomorrowName(date.getDay());
        }

        tempElement.textContent = `${forecast.temp.day.toFixed(0)}°F`;
        const iconSrc = `https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`;
        iconElement.setAttribute('src', iconSrc);
        iconElement.setAttribute('alt', forecast.weather[0].description);
        descElement.textContent = forecast.weather[0].description;
    }
}

// Function to get the weekday name
function getWeekdayName(dayIndex) {
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return weekdays[dayIndex];
}

// Function to get the day after tomorrow's weekday name
function getDayAfterTomorrowName(dayIndex) {
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return weekdays[(dayIndex + 2) % 7];
}

apiFetch();