import React, { Component } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Col,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

export default class index extends Component {
  render() {
    const { label, value, onChange, fieldName, validator, data } = this.props;

    return (
      <FormGroup row>
        <Label style={{ color: "darkblue", fontWeight: "bold", fontSize: "small" }} sm={4}>{label}*</Label>
        <Col sm={8}>
          <Input
            value={value}
            onChange={(e) => onChange(fieldName, e)}
            type="select"
          >
            {data && data.map((d) => <option value={d.value}>{d.name}</option>)}
          </Input>
          <span style={{ color: "red" }}>
            {validator.message(label, value, "required")}
          </span>
        </Col>
      </FormGroup>
    );
  }
}
