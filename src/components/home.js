import React, { useState } from "react";
import Page from "./page";

export default function Home() {
  const [movie, setMovieName] = useState("");
  const [pageNumber, setPageNumber] = useState(1);

  return (
    <div>
      <div className="card m-3 p-3">
        <h2>Welcome.</h2>
        <h5 className="mb-3">
          Millions of movies, TV shows and games to discover. Explore now.
        </h5>
        <input
          className="form-control mr-sm-2 "
          value={movie}
          type="text"
          placeholder="Search for a movie, tv show, game......"
          onChange={(e) => setMovieName(e.target.value)}
        />
      </div>
      <div className="btn-group-horizontal text-right mr-3">
        <button
          className="btn btn-secondary m-1"
          onClick={() => setPageNumber(1)}
        >
          01
        </button>
        <button
          className="btn btn-secondary m-1"
          onClick={() => setPageNumber(2)}
        >
          02
        </button>
        <button
          className="btn btn-secondary m-1"
          onClick={() => setPageNumber(3)}
        >
          03
        </button>
        <button
          className="btn btn-secondary m-1"
          onClick={() => setPageNumber(4)}
        >
          04
        </button>
        <button
          className="btn btn-secondary m-1"
          onClick={() => setPageNumber(5)}
        >
          05
        </button>
        <button
          className="btn btn-secondary m-1"
          onClick={() => setPageNumber(6)}
        >
          06
        </button>
      </div>
      <Page movie={movie} pageNumber={pageNumber} />
    </div>
  );
}
