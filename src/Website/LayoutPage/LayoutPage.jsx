import { Avatar, Badge, Button, Dropdown, Flex, Menu, Space } from "antd";
import Search from "antd/es/input/Search";
import {
  DownOutlined,
  FilterOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import ShopPage from "../Shop/ShopPage";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import LoginForm from "../SignupLogin/LoginForm";
import SignupForm from "../SignupLogin/SignupForm";

let Logo = require("./images/logo-full.png");

export default function LayoutPage() {
  const [isSignup, setIsSignup] = useState(false);
  const [isSignin, setIsSignin] = useState(false);
  const [contentView, setContentView] = useState(false);
  return (
    <>
      <div>
        <Flex
          style={{
            justifyContent: "space-around",
            height: "50px",
            alignItems: "center",
            marginLeft: "120px",
            marginRight: "120px",
          }}
        >
          <div>
            <img style={{ height: "50px" }} alt="example" src={Logo} />
          </div>
          <Menu
            inlineCollapsed={false}
            mode="horizontal"
            // onClick={(info) => <link}
            style={{ flex: 1, minWidth: 0, paddingLeft: "8px" }}
            items={[
              {
                label: <Link to="/home">Home</Link>,
                key: "home",
              },
              {
                label: <Link to="/shop">Shop</Link>,
                key: "shop",
              },
              {
                label: <Link to="/featured">Featured</Link>,
                key: "featured",
              },
              {
                label: <Link to="/recommended">Recommended</Link>,
                key: "recommended",
              },
            ]}
          />
          <Flex gap={8} style={{alignItems:"center"}}>
            <Flex gap={4}>
              <Search
                addonBefore={
                  <Flex gap={4}>
                    <span>Filter</span>
                    <FilterOutlined />
                  </Flex>
                }
                placeholder="search product"
                allowClear
                style={{ width: 304 }}
              />
              <Badge count={1} size="small">
                <Button type="link" icon={<ShoppingCartOutlined />} />
              </Badge>
            </Flex>
            <div>
              <Menu
                inlineCollapsed={false}
                mode="horizontal"
                style={{ flex: 1, minWidth: 0, paddingLeft: "8px" }}
                items={[
                  {
                    label: (
                      <Button
                        style={{
                          background: "black",
                          color: "white",
                          borderRadius: 0,
                        }}
                        onClick={() => setIsSignup(true)}
                      >
                        Sign up
                      </Button>
                    ),
                    key: "Sign up",
                  },
                  {
                    label: (
                      <Button
                        style={{
                          background: "#F2F2F2",
                          borderRadius: 0,
                        }}
                        onClick={() => setIsSignin(true)}
                      >
                        Sign in
                      </Button>
                    ),
                    key: "Sign in",
                  },
                ]}
              ></Menu>
            </div>
          </Flex>
        </Flex>
        {/* <ShopPage /> */}
        {}
        {isSignup ? <SignupForm /> : <Outlet />}
      </div>
    </>
  );
}
