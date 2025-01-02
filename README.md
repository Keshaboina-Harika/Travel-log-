🌍 Travel Log Web Application

A full-stack web application to explore and share travel experiences, featuring a modern React-based frontend, MongoDB for data storage, and RESTful API integration.

📖 Table of Contents

    Project Overview
    Features
    Technologies Used
    Getting Started
    API Endpoints
    Project Structure
    Future Enhancements

📌 Project Overview

The Travel Log Web Application allows users to document and explore travel destinations interactively. Users can view travel logs, post reviews, upload multimedia (photos/videos), and rate destinations. It provides real-time information on popular destinations while ensuring a seamless user experience.

✨ Features

    Explore Travel Destinations:
        Browse destinations and their details, including location, cost, and travel capacity.

    User-Generated Content:
        Users can post images, videos, and reviews about their travel experiences.

    Rating System:
        Rate destinations based on user preferences.

    Dynamic Cost Calculation:
        Displays travel cost based on user preferences or filters.

    RESTful API Testing:
        API tested thoroughly with Postman for smooth data transactions.

🔧 Technologies Used
Frontend:

    React: For building an interactive and dynamic user interface.
    Bootstrap: For responsive and visually appealing designs.

Backend:

    Node.js: Backend runtime environment.
    Express.js: RESTful API development.

Database:

    MongoDB: NoSQL database for scalable and flexible data storage.

API Testing:

    Postman: For API testing and validation.

🛠️ Getting Started

Follow these steps to set up and run the project locally:
Prerequisites:

    Node.js and npm installed on your machine.
    MongoDB installed and running locally or connected to a cloud MongoDB instance.

Installation Steps:

    Clone the repository:

git clone https://github.com/your-username/travel-log-app.git  

Navigate to the project directory:

cd travel-log-app  

Install dependencies for both frontend and backend:

    For the frontend:

cd frontend  
npm install  

For the backend:

    cd backend  
    npm install  

Create a .env file in the backend folder and add the following environment variables:

MONGO_URI=your_mongodb_connection_string  
PORT=5000  

Run the application:

    Start the backend server:

cd backend  
npm start  

Start the frontend:

        cd frontend  
        npm start  

    Open your browser and navigate to http://localhost:3000 to view the application.

📡 API Endpoints

Here are some of the major API endpoints available in the application:
Destinations:

    GET /api/destinations: Fetch all travel destinations.
    POST /api/destinations: Add a new destination.

Reviews:

    POST /api/reviews: Submit a review for a destination.
    GET /api/reviews/:id: Fetch reviews for a specific destination.

Ratings:

    POST /api/ratings: Submit a rating for a destination.

📂 Project Structure

travel-log-app/  
│  
├── frontend/  
│   ├── public/  
│   ├── src/  
│   │   ├── components/  
│   │   ├── App.js  
│   │   └── index.js  
│   └── package.json  
│  
├── backend/  
│   ├── controllers/  
│   ├── models/  
│   ├── routes/  
│   ├── server.js  
│   └── package.json  
│  
└── README.md  

🚀 Future Enhancements:

    Geolocation Features:
        Implement geolocation to provide location-based suggestions.

    Real-Time Chat:
        Allow users to communicate and share travel plans in real time.

