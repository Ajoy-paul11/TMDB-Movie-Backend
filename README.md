# TMDB Movie Backend API

A robust REST API built with Node.js and Express that provides comprehensive movie and TV show information by leveraging the TMDB API. This service includes user authentication and offers detailed endpoints for movies, TV shows, and search functionality.

## Features

- **Movie Information**: Access trending movies, now playing, trailers, and recommendations
- **TV Show Details**: Get popular shows, trailers, similar shows, and keywords
- **Search Functionality**: Search across movies and TV shows
- **User Authentication**: Secure signup, login, and logout using JWT
- **Category-based Filtering**: Get movies and TV shows by specific categories

## Technologies Used

- **Node.js**: Runtime environment
- **Express.js**: Web application framework
- **MongoDB**: Database for user management
- **JWT**: Token-based authentication
- **TMDB API**: External API for movie and TV show data

## API Endpoints

[https://tmdb-movie-backend.onrender.com](https://tmdb-movie-backend.onrender.com)

### Movies (`/api/v1/movie`)

| Method | Endpoint               | Description                    |
| ------ | ---------------------- | ------------------------------ |
| GET    | `/trending`            | Get trending movies            |
| GET    | `/nowplaying`          | Get currently playing movies   |
| GET    | `/:id/trailer`         | Get movie trailers             |
| GET    | `/:id/details`         | Get detailed movie information |
| GET    | `/:id/similar`         | Get similar movies             |
| GET    | `/:id/recommendations` | Get movie recommendations      |
| GET    | `/:category`           | Get movies by category         |

### TV Shows (`/api/v1/tv`)

| Method | Endpoint               | Description                      |
| ------ | ---------------------- | -------------------------------- |
| GET    | `/trending`            | Get trending TV shows            |
| GET    | `/popular`             | Get popular TV shows             |
| GET    | `/:id/trailers`        | Get TV show trailers             |
| GET    | `/:id/details`         | Get detailed TV show information |
| GET    | `/:id/similar`         | Get similar TV shows             |
| GET    | `/:id/recommendations` | Get TV show recommendations      |
| GET    | `/:id/keywords`        | Get TV show keywords             |
| GET    | `/:category`           | Get TV shows by category         |

### Search (`/api/v1/search`)

| Method | Endpoint  | Description                |
| ------ | --------- | -------------------------- |
| GET    | `/:query` | Search movies and TV shows |

### User Authentication (`/api/v1/user`)

| Method | Endpoint    | Description       |
| ------ | ----------- | ----------------- |
| POST   | `/register` | Register new user |
| POST   | `/login`    | User login        |
| POST   | `/logout`   | User logout       |

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB installed and running
- TMDB API key

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/Ajoy-paul11/TMDB-Movie-Backend.git
   ```
2. Navigate to the project
   ```sh
   cd TMDB-Movie-Backend
   ```
3. Install NPM package
   ```sh
   npm install
   ```
4. Create a .env file in the root directory
   ```sh
   PORT=8000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   TMDB_API_KEY=your_tmdb_api_key
   ```
5. Run development server
   ```sh
   npm run start
   ```

## API Usage Example

### Register a User

POST /api/v1/register
Content-Type: application/json

```sh
{
"username": "johnsmith",
"email": "john@example.com",
"password": "securepassword123"
}
```

### Get Trending Movies

GET /api/v1/movie/trending

### Search Movies and TV Shows

GET /api/v1/search/inception

## Authentication

- The API uses JWT (JSON Web Tokens) for authentication. Include the token in the Authorization header:

  ```sh
  Authorization: Bearer your_jwt_token
  ```

## Contact

<p align="left"> <a href="https://twitter.com/ajoy_paul11" target="blank"><img src="https://img.shields.io/twitter/follow/ajoy_paul11?logo=twitter&style=for-the-badge" alt="ajoy_paul11" /></a> </p>

<a href="https://linkedin.com/in/ajoypaul" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="ajoypaul" height="30" width="40" /></a>
