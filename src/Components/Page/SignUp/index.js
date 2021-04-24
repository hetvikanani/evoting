import React, { Component } from "react";
import Entity from "./Entity";
import Scrutinizer from "./Scrutinizer";

import { Link } from "react-router-dom";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      entity: true,
      scrutinizer: false,
    };
  }

  entityClick = () => this.setState({ entity: true, scrutinizer: false });

  scrutinizerClick = () => this.setState({ scrutinizer: true, entity: false });

  render() {
    console.log(
      "hu singup nu render",
      this.props,
      setTimeout(this.props, 2000)
    );
    return (
      <>
        <div className="header">
          <h4>
            <span style={{ color: "green" }}> Sign Up </span> |{" "}
            <span className="hover" onClick={this.props.check}>
              <Link style={{ color: "green" }} to="sign-in">
                Sign In
              </Link>
            </span>
          </h4>
        </div>
        <div className="radioBtn">
          <div className="p1">
            <input
              className="hover"
              type="radio"
              value="entity"
              checked={this.state.entity}
              onClick={this.entityClick}
            />
            <label onClick={this.entityClick} style={{ marginLeft: "5px" }}>
              ENTITY
            </label>
          </div>
          <div className="p1">
            <input
              className="hover"
              type="radio"
              value="scrutinizer"
              checked={this.state.scrutinizer}
              onClick={this.scrutinizerClick}
            />
            <label
              onClick={this.scrutinizerClick}
              style={{ marginLeft: "5px" }}
            >
              SCRUTINIZER
            </label>
          </div>
        </div>
        {this.state.entity ? <Entity /> : null}
        {this.state.scrutinizer ? <Scrutinizer /> : null}
      </>
    );
  }
}
export default SignUp;
