import React, { useState, useEffect } from "react";

export default function Post(props) {
  return (
    <div>
      {props.movies.map((e, idx) => (
        <div key={idx}>
          <h4 className="card-title">{e.Title}</h4>
          <img src={e.Poster} alt="picture" />
        </div>
      ))}
      <div className="card-header">Header</div>
      <div className="card-body">
        <h4 className="card-title">Primary card title</h4>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
  );
}
