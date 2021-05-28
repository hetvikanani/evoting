import React, { Component } from "react";
import { Form, Button, Checkbox } from "antd";
import { Link } from "react-router-dom";
import AntdInput from "../../Common/AntdInput";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const MemberIn = () => {
  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
    >
      <AntdInput
        label="Username*"
        name="xyz"
        message="Please input your username!"
      />
      <AntdInput
        label="Password*"
        name="password"
        message="Please input your password!"
        password
      />
      <Form.Item
        wrapperCol={{
          offset: 17,
          span: 17,
        }}
      >
        <Link to="forgot-password">
          <span>Forgot password?</span>
        </Link>
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button shape="round" type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default MemberIn;
