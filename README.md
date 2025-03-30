# 🎬 Movie Vision Server

This is the **backend server** for the Movie Vision project, responsible for handling **API requests, user authentication, and database interactions**. It powers the frontend by fetching **movie data from TMDB, managing user accounts, and storing watch later lists**.

## 🚀 Features

- **Movie Search API**: Fetches movies and web series based on user queries.
- **Genre-Based Recommendations**: Retrieves movies based on selected genres.
- **User Authentication**: Secure login and signup functionality.
- **Watch Later Management**: Allows users to save and retrieve their favorite movies.
- **TMDB API Integration**: Real-time movie data from The Movie Database.

## 🛠 Tech Stack

- **Backend Framework**: Node.js with Express.js
- **Database**: MongoDB (for user accounts and watch later lists)
- **Authentication**: JWT (JSON Web Token)
- **API Requests**: Axios for fetching data from TMDB
- **Environment Variables**: Dotenv for secure API key storage

## 🎨 Installation & Setup

### 1️⃣ Clone the Repository
```sh
 git clone https://github.com/Kunal182001/Movie_Vision_Server.git
 cd server
```

### 2️⃣ Install Dependencies
```sh
 npm install
```

### 3️⃣ Set Up Environment Variables
Create a **.env** file in the root directory and add:
```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
EMAIL=Your_gmail 
PASSWORD=Your_gmail_Token
```

### 4️⃣ Run the Server
```sh
 node server.js
```
The server will start on **http://localhost:5000/**.

## 📁 Folder Structure

```
Movie-Vision-Server/
├── Helper/           # Handles API requests
├── models/           # MongoDB schemas
├── routes/           # API endpoints
├── Database/         # Database and API configurations
├── .env              # Environment variables
├── server.js         # Main entry point
└── README.md         # Documentation
```

## 📌 Deployment

You can deploy the server on **Vercel, Render, or Railway** for hosting.

## 📝 License

This project is **open-source**. Feel free to use and modify it but kindly give credit if used in production.

---

Let me know if you need any changes! 🚀

