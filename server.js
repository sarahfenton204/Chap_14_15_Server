const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("/weather", async (req, res) => {
    try {
        const { latitude, longitude } = req.query;
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);

        if (!latitude || !longitude) {
            return res.status(404).json({ error: "Latitude and longitude are required" });
        }

        const data = await response.json();

        const weather = data.current_weather;

        // Send back only the data we need
        res.json({
            temperature: weather.temperature,
            windspeed: weather.windspeed,
            winddirection: weather.direction,
        });

    } catch (error) {
        res.status(500).json({ error: "Server error: " + error.message });
    }
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});