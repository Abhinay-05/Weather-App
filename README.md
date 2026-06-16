# Weather-App

# 🌤 Weather App

A simple and responsive weather application built using HTML, CSS, and JavaScript. It allows users to search for weather information by city name or use their current location to get live weather updates.

## Features

* Search weather by city name
* Get weather using current location (Geolocation API)
* Displays:

  * Temperature
  * Weather condition
  * Weather icon
  * Humidity
  * Wind speed
  * Feels-like temperature
  * Local time of the location
* Responsive and clean UI
* Search using the Enter key

## Tech Stack

* HTML
* CSS
* JavaScript
* WeatherAPI

## API Used

Weather data is fetched from WeatherAPI.

Endpoint used:

```text
https://api.weatherapi.com/v1/current.json
```

## How to Run

1. Clone the repository:

```bash
git clone <your-repository-url>
```

2. Open the project folder.

3. Open `index.html` in your browser.

That's it.

## Project Structure

```text
weather-app/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## Future Improvements

Some features I may add later:

* 5-day weather forecast
* Dark mode
* Temperature unit toggle (°C / °F)
* Better error handling
* Recent search history

## Note

For learning purposes, the API key is currently used directly in the frontend. In a production application, it should be stored securely on the backend.

---

Built as a small project to practice working with APIs, asynchronous JavaScript, and browser APIs like Geolocation.
