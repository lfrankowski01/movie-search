# Movie Search

A responsive movie search application built with React that allows users to search for movies and view detailed information using the OMDB API.

## Features

- Search for movies by title
- Filter movies by release year
- View movie posters and release date
- View description about a film
- Pagination through search results
- Loading and error states
- Fallback for missing or broken movie posters
- Responsive design
- Dynamic pages using Router

## Technologies used

- React
- JavaScript
- React Router
- Vite
- CSS
- OMDB API
- Git & GitHub

## What I learned

This project helped me practice and improve my understanding of:

-Building reusable React components
-Props and State with `useState`
-Fetching API data with `fetch`
-Using `async/await` and error handling
-Using `useEffect`
-Conditional rendering
-Rendering lists with `.map()`
-React Router
-Dynamic routes with `useParams`
-Loading and error states
-Environment variables

## Running the project locally

Clone the repository and install the dependencies:

```bash
npm install
```

Create a `.env` file in the root of the project and add your OMDB API key:

```env
VITE_OMDB_API_KEY=your_api_key
```

Then start the development server:

```bash
npm run dev
```

An API key can be obtained from the OMDB API website.

## Author

Built by Lukasz Frankowski as part of my web development portfolio.