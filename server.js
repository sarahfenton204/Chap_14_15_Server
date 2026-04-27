/**
 * This file starts the web server and creates the weather API endpoint
 * @author Sarah Fenton
 * @see {@link https://github.com/sarahfenton204/Chap_14_15_Server}
 * @since 2026.05.01
 */

const express = require("express");
const path = require("path");
const app = express();

/**
 * References the public directory
 */
app.use(express.static(path.join(__dirname, "public")));

/**
 * Gets current weather data from the API based on the user's input of longitude and latitude
 */
app.get("/weather", async (req, res) => {
    try {
        const { latitude, longitude } = req.query;
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);

        if (!response.ok) {
            return res.status(404).json({ error: "Weather API Error" });
        }

        const data = await response.json();

        const weather = data.current_weather;

        // Send back only the data we need
        res.json({
            temperature: weather.temperature,
            windspeed: weather.windspeed,
            timezone: data.timezone,
        });

    } catch (error) {
        res.status(500).json({ error: "Server error: " + error.message });
    }
});

/**
 * Starts the server on port 3000
 */
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});