async function loadWeather() {
    const latitude = document.getElementById("latitude").value;
    const longitude = document.getElementById("longitude").value;
    const status = document.getElementById("status");
    const card = document.getElementById("pokemonCard");

    // Validate input
    if (!latitude || !longitude) {
        return res.status(400).json({ error: "Latitude and longitude are required" });
    }

    try {
        status.textContent = "Loading...";
        card.classList.add("hidden");

        const response = await fetch(`/weather?latitude=${latitude}&longitude=${longitude}`);

        if (!response.ok) {
            throw new Error("Pokemon not found!");
        }

        const weather = await response.json();

        // Populate the card
        document.getElementById("temperature").textContent = weather.temperature;
        document.getElementById("windspeed").textContent = weather.windspeed;
        document.getElementById("winddirection").textContent = weather.winddirection;

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