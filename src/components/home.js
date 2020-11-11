import React from "react";

export default function Home() {
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
    </div>
  );
}
