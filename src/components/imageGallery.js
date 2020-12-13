import React from "react";

export default function ImageGallery(props) {
  return (
    <div className="row">
      {/* used bootstrap to responsive web design */}

      {props.images.map((image, index) => (
        <div className="card-body ml-1" key={index}>
          <img src={image.url} alt="picture" />
          {/* if there is no image alt will show in the place where the image would be */}
        </div>
      ))}
    </div>
  );
}
