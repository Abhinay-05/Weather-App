const apiKey = "966a766dc6c24e0c93681454261606";

const searchBtn = document.getElementById("searchBtn");
const locationBtn = document.getElementById("locationBtn");
const locationInput = document.getElementById("locationInput");

searchBtn.addEventListener("click", getWeather);

locationInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        getWeather();
    }
});

// Search weather by city
async function getWeather() {
    const city = locationInput.value.trim();

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    fetchWeather(city);
}

// Fetch weather data
async function fetchWeather(query) {
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${query}&aqi=yes`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();

        document.getElementById("city").textContent =
            `${data.location.name}, ${data.location.country}`;

        document.getElementById("localTime").textContent =
            "🕒 Local Time: " + data.location.localtime;    

        document.getElementById("temp").textContent =
            `${data.current.temp_c} °C`;

        document.getElementById("condition").textContent =
            data.current.condition.text;

        document.getElementById("humidity").textContent =
            `${data.current.humidity}%`;

        document.getElementById("wind").textContent =
            `${data.current.wind_kph} km/h`;

        document.getElementById("feelsLike").textContent =
            `${data.current.feelslike_c} °C`;

        document.getElementById("weatherIcon").src =
            "https:" + data.current.condition.icon;

        document.getElementById("weatherCard").style.display = "block";

    } catch (error) {
        alert(error.message);
    }
}

// Use current location
locationBtn.addEventListener("click", () => {

    if (!navigator.geolocation) {
        alert("Geolocation is not supported by your browser.");
        return;
    }

    navigator.geolocation.getCurrentPosition(
        (position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            fetchWeather(`${lat},${lon}`);
        },
        () => {
            alert("Unable to retrieve your location.");
        }
    );
});