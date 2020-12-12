import React from "react";

export default function ImageGallery(props) {
  return (
    <div>
      <div>
        {props.images.map((image, index) => (
          <img src={image.url} alt="picture" key={index} />
        ))}
      </div>
    </div>
  );
}
