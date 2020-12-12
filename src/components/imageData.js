import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ImageGallery from "./imageGallery";
import Button from "@material-ui/core/Button";

export default function ImageData() {
  const [data, setData] = useState([]);
  const { albumId } = useParams();
  // albumId should be the same as I declare path="/album/:albumId" in Router
  const [size, setSize] = useState(10);

  useEffect(() => {
    async function fetchData() {
      let response = await fetch("https://jsonplaceholder.typicode.com/photos");
      // fetch data from test api
      let json = await response.json();
      // parsed json response into native JS objects
      setData(json); // fetched data stored in data variable using useState
    }
    fetchData(); //excute fetchData function
  }, []);
  // second empty array means that is excuted one time like componentDidMount
  // if I put some arguments it will be functional as componentDidUpdate
  // which means it will be updated whenever user changes arguments

  const totalImagesURL = data.filter((e) => e.albumId === parseInt(albumId));
  // filter method returns only the elements satisfy with the condition
  // when we have a variable by useParams it is always string
  // so we need to change data type same as api

  const numberOfImages = totalImagesURL.slice(0, size);
  // We have 50 images so I slice it first 10 images to child component

  const handleShowMore = () => {
    if (size >= 50) {
      alert("You have seen all pictures");
      return;
    }
    // we have only 50 images for each albumId
    // Once it shows 50 images it will alert if user clicks it
    return setSize(size + 10);
  };
  //

  return (
    <div>
      <div style={{ position: "fixed", top: "0", left: "10px" }}>
        <Link to="/">
          <h2>BACK</h2>
        </Link>
      </div>
      <div style={{ marginTop: "60px" }}>
        <ImageGallery images={numberOfImages} />
      </div>
      <div>
        <Button
          variant="contained"
          color="primary"
          style={{ marginLeft: "10px" }}
          onClick={handleShowMore}
        >
          {/* when user click this button handleShowMore function will be excuted */}
          Show more
        </Button>
      </div>
    </div>
  );
}
