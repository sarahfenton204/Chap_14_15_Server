# 🌤️ Weather App (Express + Open-Meteo API)

## 👩‍💻 Author
- [Sarah Fenton](https://github.com/sarahfenton204)

---

## 📚 Table of Contents
- [📄 Project Overview](#-project-overview)
- [🧰 Tech Stack](#-tech-stack)
- [🛠️ Development Tools](#️-development-tools)
- [🧠 Core Concepts / New Concepts](#-core-concepts--new-concepts)
- [✨ Features](#-features)
- [⚙️ How It Works](#️-how-it-works)
- [🖼️ Visual Aids](#️-visual-aids)
- [💡 Reflection: What I Learned](#-reflection-what-i-learned)

---

## 📄 Project Overview

This is a full-stack weather web application built using **Node.js, Express, and vanilla JavaScript 🌤️**  

Users enter latitude and longitude, and the app retrieves real-time weather data from the Open-Meteo API.
The project demonstrates how a frontend and backend communicate using RESTful API requests.

---

## 🧰 Tech Stack

| Technology | Purpose |
|-----------|--------|
| Node.js   | Backend runtime environment |
| Express.js| Server and API routing |
| JavaScript| Frontend + backend logic |
| HTML/CSS  | User interface |
| Open-Meteo API | Weather data source |

---

## 🛠️ Development Tools

| Tool | Description |
|-----|------------|
| Web Storm | Code editor |
| Web Browser | Testing frontend |
| Node.js Runtime | Backend execution |
| GitHub | Version control and hosting |

---

## 🧠 Core Concepts / New Concepts

- Express.js server setup  
- REST API endpoint creation (`/weather`)  
- Serving static files using Express  
- Fetching external APIs (Open-Meteo)  
- Async/Await for asynchronous programming  
- JSON request/response handling  
- Query parameters in URLs  
- Error handling with `try/catch` and HTTP status codes  
- DOM manipulation for dynamic UI updates  
- Event listeners (including Enter key support)  
- Data conversion (Celsius → Fahrenheit)  
- Separation of frontend and backend logic  

---

## ✨ Features

- 🌍 User input for latitude and longitude  
- ☁️ Real-time weather data retrieval  
- 🔥 Temperature conversion (Celsius → Fahrenheit)  
- 💨 Wind speed and timezone display  
- ⚠️ Error handling for invalid requests  
- 🧾 Clean JSON data formatting from backend  
- 🎯 Dynamic UI updates in browser  

---

## ⚙️ How It Works

### 1. User Input (Frontend)
- User enters latitude and longitude

### 2. Request Sent
- Frontend sends data to `/weather` endpoint

### 3. Backend Processing (Express)
- Receives coordinates
- Calls Open-Meteo API
- Retrieves weather data

### 4. Data Handling
- Extracts:
  - Temperature (°C)
  - Wind speed (km/h)
  - Timezone  
- Sends simplified JSON response

### 5. Display Output
- Frontend receives data
- Converts temperature to Fahrenheit
- Updates UI dynamically in a weather card

---

## 🖼️ Visual Aids

### 📥 Input Screen
<img width="843" height="513" alt="Input" src="https://github.com/user-attachments/assets/88ec77f6-d545-407f-8b5b-19955bf80a9d" />
<br><br>

### 🌤️ Weather Output
<img width="790" height="522" alt="Output" src="https://github.com/user-attachments/assets/6e2ede01-4a90-407f-8ac8-f46e953a81d9" />

---

## 💡 Reflection: What I Learned

Through this project, I gained a stronger understanding of full-stack development and how frontend and backend systems communicate through APIs.

I learned how to build and structure an Express server, handle API requests, and process external data. I also improved my understanding of asynchronous JavaScript using async/await and how to manage real-time data updates in the browser.
This project reinforced the importance of separating concerns between frontend and backend while building scalable web applications.

[⬆ Back to TOC](#-table-of-contents)

---
