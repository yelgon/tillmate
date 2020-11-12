import React, { useState, useEffect } from "react";

export default function Home() {
  const [movieName, setMovieName] = useState("call me");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let response = await fetch(
        `https://www.omdbapi.com/?s=${movieName}&page=1&apikey=6e81707`
      );
      let json = await response.json();
      console.log(json.Search);
    }
    fetchData();
  }, []);
  const test = movies;
  // console.log(json);

  return (
    <div className="card card-body m-4">
      <h2>Welcome.</h2>
      <h5 className="mb-4">
        Millions of movies, TV shows and games to discover. Explore now.
      </h5>

      <form className="form-inline">
        <input
          className="form-control mr-sm-2 col-lg-4"
          type="text"
          placeholder="Search for a movie, tv show, game......"
        />
        <button className="btn btn-secondary my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
      {/* <div>{movies[0].Title}</div> */}
    </div>
  );
}
