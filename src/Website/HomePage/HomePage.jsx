import { Button, Flex } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

import { BannerGirl, Logo, PageLogo } from "../../images/images";
import "../SignupLogin/Button.styles.css";

export default function HomePage() {
  return (
    <>
      <Flex style={{ paddingInline: "160px", justifyContent: "space-around" }}>
        <Flex
          vertical
          style={{
            width: "100%",
            justifyContent: "center",
            height: "370px",
            gap: "25px",
            fontFamily: "sans-serif",
          }}
        >
          <p1 style={{ fontSize: "40px" }}>
            <strong>See</strong> everything <br />
            with <strong>Clarity</strong>
          </p1>
          <p2>
            Buying eyewear should leave you happy and good-looking, with money
            in your pocket. Glasses, sunglasses, and contacts—we’ve got your
            eyes covered.
          </p2>
          <Button
            className="customButton"
            style={{ width: "100px", background: "black", color: "white" }}
          >
            Shop Now
            <ArrowRightOutlined />
          </Button>
        </Flex>
        <Flex
          style={{
            marginTop: "12px",
            textAlign: "center",
            fontWeight: "bold",
            flexWrap: "wrap",
            width: "100%",
            height: "100%",
          }}
        >
          {/* <Logo /> */}
          {/* <BannerGirl /> */}
          <PageLogo />
        </Flex>
      </Flex>
    </>
  );
}
