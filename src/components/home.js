import React, { useState } from "react";
import Page from "./page";
import { Link } from "react-router-dom";

export default function Home() {
  const [movie, setMovieName] = useState("");

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
        <Link to={`/`} className="btn btn-secondary m-1">
          01
        </Link>
        <Link to={`/page/2`} className="btn btn-secondary m-1">
          02
        </Link>
        <Link to={`/page/3`} className="btn btn-secondary m-1">
          03
        </Link>
        <Link to={`/page/4`} className="btn btn-secondary m-1">
          04
        </Link>
        <Link to={`/page/5`} className="btn btn-secondary m-1">
          05
        </Link>
        <Link to={`/page/6`} className="btn btn-secondary m-1">
          06
        </Link>
      </div>
      <Page movie={movie} />
    </div>
  );
}
