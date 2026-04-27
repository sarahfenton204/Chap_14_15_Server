async function loadWeather() {
    const latitude = document.getElementById("latitude").value;
    const longitude = document.getElementById("longitude").value;
    const status = document.getElementById("status");
    const card = document.getElementById("weatherCard");

    // Validate input
    if (!latitude || !longitude) {
        status.textContent = "Please enter both latitude and longitude.";
        card.classList.add("hidden");
        return;
    }

    try {
        status.textContent = "Loading...";
        card.classList.add("hidden");

        const response = await fetch(`/weather?latitude=${latitude}&longitude=${longitude}`);

        if (!response.ok) {
            throw new Error("Weather data not found!");
        }

        const weather = await response.json();

        const celsius = weather.temperature;
        const fahrenheit = (celsius * (9/5)) + 32;
        const fahrenheitRounded = fahrenheit.toFixed(1);
        const celsiusRounded = celsius.toFixed(1);

        // Populate the card
        document.getElementById("temperature").textContent = celsiusRounded + " °C / " + fahrenheitRounded + " °F";
        document.getElementById("windspeed").textContent = weather.windspeed + " km/h";
        document.getElementById("timezone").textContent = weather.timezone;

        status.textContent = "";
        card.classList.remove("hidden");

    } catch (error) {
        status.textContent = "Error: " + error.message;
        card.classList.add("hidden");
        console.error(error);
    }
}

// Allow pressing Enter to search
document.getElementById("latitude").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        loadWeather();
    }
});

document.getElementById("longitude").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        loadWeather();
    }
});