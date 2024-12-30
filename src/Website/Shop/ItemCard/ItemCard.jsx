import { Card } from "antd";
import Meta from "antd/es/card/Meta";

// {img: "", title: "", type: "", price}

export function ItemCard({ item }) {
  return (
    <Card
      hoverable
      style={{
        marginTop: "8px",
        marginLeft: "8px",
      }}
      cover={
        <img
          style={{ height: 100 }}
          alt="example"
          // src="https://fastly.picsum.photos/id/203/200/300.jpg?hmac=mJaqsySlyEjr8fLBHytyVCUyqlfPSxqXePXEIhZZi_Y"
          src={item.img}
        />
      }
    >
      <Meta title={item.title} description={item.type} />
      <Meta description={item.price} />
    </Card>
  );
}
