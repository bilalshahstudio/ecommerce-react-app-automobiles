import {
  FacebookOutlined,
  GithubOutlined,
  GoogleOutlined,
} from "@ant-design/icons";
import { Button, Divider, Flex, Form, Input } from "antd";
import Link from "antd/es/typography/Link";
import "./Button.styles.css";

export default function SignupForm() {
  return (
    <Flex
      style={{
        border: "2px solid rgb(237, 242, 239)",
        marginTop: "143px",
        marginInline: "317px",
        justifyContent: "space-around",
        paddingBlock: "40px",
      }}
    >
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
          paddingInline: "10px",
          paddingTop: "10px",
        }}
        initialValues={{
          remember: true,
        }}
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="Email"
          rules={[
            {
              required: true,
              message: "Please input your Email address!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Link>forgot password?</Link>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
      <Divider type="vertical" style={{ height: "200px", alignSelf: "center" }}>
        Or
      </Divider>
      <Flex vertical style={{ marginTop: "35px", gap: "32px" }}>
        <Button
          icon={<FacebookOutlined />}
          type="primary"
          className="customButton"
        >
          Continue with Facbook
        </Button>
        <Button icon={<GoogleOutlined />} className="customButton">
          Continue with Google
        </Button>
        <Button
          icon={<GithubOutlined />}
          className="customButton"
          style={{
            color: "white",
            background: "black",
          }}
        >
          Continue with Github
        </Button>
      </Flex>
    </Flex>
  );
}
