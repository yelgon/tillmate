import React, { useState, useEffect } from "react";
import Post from "./post";

export default function Home() {
  const [movie, setMovieName] = useState("love");
  const [page, setPage] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let response = await fetch(
        `https://www.omdbapi.com/?s=${movie}&apikey=6e81707`
      );
      let json = await response.json();
      setPage(json.Search);
    }

    fetchData();
  }, [movie]);

  console.log(page);

  return (
    <div className="card card-body m-4">
      <h2>Welcome.</h2>
      <h5 className="mb-4">
        Millions of movies, TV shows and games to discover. Explore now.
      </h5>

      <input
        className="form-control mr-sm-2 col-lg-4"
        value={movie}
        type="text"
        placeholder="Search for a movie, tv show, game......"
        onChange={(e) => setMovieName(e.target.value)}
      />
      <input
        className="btn btn-secondary my-2 my-sm-0"
        type="submit"
        value="Search"
        onClick={(e) => setMovieName(movie)}
      />

      <Post movies={page ? page : []} />
    </div>
  );
}
