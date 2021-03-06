import React, { Component } from "react";
import { Button, Form } from "reactstrap";
import SimpleReactValidator from "simple-react-validator";
import Input from "./../../Common/Input/index";
import Select from "./../../Common/Select/index";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
// import './signup.css'

const countryData = [
  { name: "India", value: "india" },
  { name: "Pakistan", value: "pakistan" },
  { name: "Usa", value: "Usa" },
  { name: "Canada", value: "canda" },
];

const stateData = [
  { name: "Gujarat", value: "gujarat" },
  { name: "Mp", value: "mp" },
];
class Entity extends Component {
  constructor() {
    super();
    this.validator = new SimpleReactValidator({
      validators: {
        pancard: {
          // name the rule
          message: "Enter valid pancard number",
          rule: (val, params, validator) => {
            return validator.helpers.testRegex(
              val,
              /^([A-Z]){5}([0-9]){4}([A-Z]){1}?$/
            );
          },
          // messageReplace: (message, params) => message.replace(':values', this.helpers.toSentence(params)),  // optional
          required: true, // optional
        },
      },
    });
    this.state = { field: {} };
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
      this.props.setEntityDetails(this.state.field);
      this.props.history.push("/entity-details");
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }
  };

  render() {
    console.log("hu enitity nu render", this.props);
    const { field } = this.state;

    return (
      <Form>
        <Input
          fieldName="name"
          label="Entity Name"
          value={field["name"]}
          onChange={this.onChange}
          validator={this.validator}
        />
        <Input
          validationType="numeric|min:10|max:10"
          fieldName="telephone_number"
          label="Telephone Number"
          value={field["telephone_number"]}
          onChange={this.onChange}
          validator={this.validator}
        />
        <Input
          validationType="email"
          fieldName="email"
          label="Email Address"
          value={field["email"]}
          onChange={this.onChange}
          validator={this.validator}
        />
        <Input
          fieldName="pan"
          validationType="pancard"
          label="PAN"
          value={field["pan"]}
          onChange={this.onChange}
          validator={this.validator}
        />
        <Input
          fieldName="cin"
          label="CIN"
          value={field["cin"]}
          onChange={this.onChange}
          validator={this.validator}
        />
        <Input
          fieldName="address"
          label="Address"
          value={field["address"]}
          onChange={this.onChange}
          validator={this.validator}
        />
        <Input
          validationType="numeric|min:6|max:6"
          fieldName="pinCode"
          label="Pincode"
          value={field["pinCode"]}
          onChange={this.onChange}
          validator={this.validator}
        />

        <Select
          data={countryData}
          fieldName="country"
          label="Country"
          value={field["country"]}
          onChange={this.onChange}
          validator={this.validator}
        />
        <Select
          data={stateData}
          fieldName="state"
          label="State"
          value={field["state"]}
          onChange={this.onChange}
          validator={this.validator}
        />

        <Button
          style={{
            display: "block",
            margin: "auto",
            borderRadius: "2rem",
            backgroundColor: " rgb(9, 68, 125)",
            maxWidth: "100%",
          }}
          onClick={this.onSubmit}
        >
          Submit
        </Button>
      </Form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setEntityDetails: (data) =>
    dispatch({ type: "SET_ENTITY_DATA", payload: data }),
});

export default withRouter(connect(null, mapDispatchToProps)(Entity));
