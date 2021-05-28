import React, { Component } from "react";
import Entity from "./Entity";
import Scrutinizer from "./Scrutinizer";

import { Link } from "react-router-dom";
import Member from "./Member";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      entity: true,
      scrutinizer: false,
      member: false,
    };
  }

  entityClick = () =>
    this.setState({ entity: true, scrutinizer: false, member: false });

  scrutinizerClick = () =>
    this.setState({ scrutinizer: true, entity: false, member: false });

  memberClick = () =>
    this.setState({ scrutinizer: false, entity: false, member: true });
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
          <div className="p1">
            <input
              className="hover"
              type="radio"
              value="member"
              checked={this.state.member}
              onClick={this.memberClick}
            />
            <label onClick={this.memberClick} style={{ marginLeft: "5px" }}>
              Member
            </label>
          </div>
        </div>
        {this.state.entity ? <Entity /> : null}
        {this.state.scrutinizer ? <Scrutinizer /> : null}
        {this.state.member ? <Member /> : null}
      </>
    );
  }
}
export default SignUp;
