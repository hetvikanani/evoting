import React, { Component } from "react";

import { ReactComponent as Logo1 } from "../../../Image/Asset 12.svg";
import { Form, Input, Button, Checkbox } from "antd";
import { Link } from "react-router-dom";

const tailLayout = {
  wrapperCol: {
    offset: 4,
    span: 24,
  },
};

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

class ForgotPassword extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <h2>Forgot password ?</h2>
          <Logo1 width="200" height="200" />
          <p style={{ margin: "1rem 0" }}>
            Enter your email address below and we’ll send you instruction on how
            to change your password
          </p>
          <div>
            <Form {...layout} name="basic">
              <Form.Item
                label="Email Address"
                name="Email"
                rules={[
                  {
                    required: true,
                    message: "Please input your Email!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item {...tailLayout}>
                <Button type="primary" shape="round" onClick={this.onSubmit}>
                  Send
                </Button>
              </Form.Item>
              <Form.Item
                wrapperCol={{
                  offset: 4,
                  span: 24,
                }}
              >
                Try now... <Link to="sign-in">Login here</Link>
              </Form.Item>
            </Form>
          </div>
        </div>
      </>
    );
  }
}
export default ForgotPassword;
