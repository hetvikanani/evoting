import React, { Component } from "react";
// import { Col, Row, Button, Form, FormGroup, Label } from "reactstrap";
import SimpleReactValidator from "simple-react-validator";
import { Form, Input, Button, Checkbox } from "antd";

// import Input from "../../Common/Input/index";
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
class MemberIn extends Component {
  constructor() {
    super();
    this.state = {
      field: {},
    };
    this.validator = new SimpleReactValidator();
  }
  onChange = (myField, e) => {
    let field = this.state.field;
    if (e.target.value.trim() === "") {
      field[myField] = "";
    } else {
      field[myField] = e.target.value;
    }
    this.setState({ field });
  };

  onSubmit = () => {
    if (this.validator.allValid()) {
      console.log("validator");
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }
  };
  render() {
    console.log("hu signin member");
    const { field } = this.state;
    return (
      <div>
        <Form {...layout} name="basic">
          <Form.Item
            label="Phone"
            name="Phone"
            rules={[
              {
                required: true,
                message: "Please input your Phone!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          {/* <Input
            validationType="numeric|min:9|max:10"
            fieldName="telephone_no"
            label="Phone no"
            value={field["telephone_no"]}
            onChange={this.onChange}
            validator={this.validator}
          /> */}
          <Form.Item {...tailLayout}>
            <Button type="primary" shape="round" onClick={this.onSubmit}>
              Send OTP
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
export default MemberIn;
