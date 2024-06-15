import React from "react";
import "./App.css";
import Fire from "./assets/fire.png";
import Star from "./assets/glowing-star.png";
import Party from "./assets/partying-face.png";
import Navbar from "./Componnents/Navbar/Navbar";
import MovieList from "./Componnents/Movie List/MovieList";
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        <MovieList type="popular" title="Popular" emoji={Fire} />
        <MovieList type="top_rated" title="Top Rated" emoji={Star} />
        <MovieList type="upcoming" title="Upcoming" emoji={Party} />
      </main>
    </div>
  );
};

export default App;
