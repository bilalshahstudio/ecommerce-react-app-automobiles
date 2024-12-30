import { Flex } from "antd";
import {} from "@ant-design/icons";
import { ItemCard } from "./ItemCard/ItemCard";

const items = [
  {
    img: require("./images/glasses1.jpeg"),
    title: "Sun Glasses Test",
    type: "Brown",
    price: "98$",
  },
  {
    img: require("./images/glasses2.jpeg"),
    title: "Sun Glasses 12345",
    type: "Red",
    price: "99$",
  },
  {
    img: require("./images/glasses3.jpeg"),
    title: "Sun Glasses 3456465",
    type: "Black",
    price: "99$",
  },
  {
    img: require("./images/glasses4.jpeg"),
    title: "Sun Glasses 87987",
    type: "Gold",
    price: "99$",
  },
  {
    img: require("./images/glasses5.jpeg"),
    title: "Sun Glasses 132132",
    type: "White",
    price: "99$",
  },
  {
    img: require("./images/glasses6.jpeg"),
    title: "Sun Glasses 857357",
    type: "Green",
    price: "99$",
  },
  {
    img: require("./images/glasses7.jpeg"),
    title: "Sun Glasses 191919",
    type: "Flare",
    price: "99$",
  },
  {
    img: require("./images/glasses8.jpeg"),
    title: "Sun Glasses 343434",
    type: "Tint",
    price: "99$",
  },
];

export default function ShopPage() {
  return (
    <>
      <div style={{ paddingInline: "160px" }}>
        <Flex
          style={{
            marginTop: "12px",
            textAlign: "center",
            fontWeight: "bold",
            flexWrap: "wrap",
          }}
        >
          {items?.map((item) => (
            <ItemCard item={item} />
          ))}
        </Flex>
      </div>
    </>
  );
}
