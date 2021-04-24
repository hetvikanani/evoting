import React, { Component } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Col,
} from "reactstrap";

export default class index extends Component {
  render() {
    const {
      label,
      value,
      onChange,
      fieldName,
      validator,
      validationType,
      type,
    } = this.props;
    let customType = "text";
    if (type) {
      customType = type;
    }
    let validationString = "required";
    if (validationType) {
      validationString = validationString + "|" + validationType;
    }

    console.log(this.props, "xx");

    return (
      <FormGroup row>
        <Label
          style={{ color: "darkblue", fontWeight: "bold", fontSize: "small" }}
          sm={4}
        >
          {label}*
        </Label>
        <Col sm={8}>
          <Input
            value={value}
            onChange={(e) => onChange(fieldName, e)}
            type={customType}
          />
          <span style={{ color: "red" }}>
            {validator.message(label, value, validationString)}
          </span>
        </Col>
      </FormGroup>
    );
  }
}
//tu to na padti hti k