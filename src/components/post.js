import React, { useState, useEffect } from "react";

export default function Post(props) {
  return (
    <div className="row m-2">
      {props.movies.map((e, idx) => (
        <div
          className="card border-dark p-1 ml-3 mt-3"
          style={{ maxWidth: "22rem" }}
          key={idx}
        >
          <div className="pl-2">{e.Title}</div>
          <div className="card-body">
            <img src={e.Poster} alt="picture" />
          </div>
        </div>
      ))}
    </div>
  );
}
