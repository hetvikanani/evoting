import React, { Component } from "react";
import { Form, Input } from "antd";

export default class AntdInput extends Component {
  render() {
    return (
      <Form.Item
        label={this.props.label}
        name={this.props.name}
        rules={[
          {
            required: true,
            message: this.props.message,
          },
        ]}
      >
        {this.props.password ? <Input.Password /> : <Input />}
      </Form.Item>
    );
  }
}
