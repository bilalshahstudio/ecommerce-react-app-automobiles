import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import React from "react";

// const images = require.context("./images", true);
// const imageList = images.keys().map((image) => images(image));

const items = [
  {
    img: "imagepath",
    title: "",
    type: "",
    price: "",
  },
];

function ImageGallery() {
  return (
    <div>
      {items.map((item, index) => (
        <Card
          hoverable
          style={{
            marginTop: "8px",
            marginLeft: "8px",
          }}
          cover={<img key={index} src={item.default} alt={index} />}
        >
          <Meta></Meta>
        </Card>
      ))}
    </div>
  );
}

export default ImageGallery;
