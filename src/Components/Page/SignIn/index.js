import React, { Component } from "react";
import EntityIn from "./EntityIn";
// import Scrutinizer from "./ScrutinizerIn";
import MemberIn from "./MemberIn";

import ScrutinizerIn from "./ScrutinizerIn";
import { Link } from "react-router-dom";

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      entity: false,
      scrutinizer: false,
      member: true,
    };
  }

  entityClick = () =>
    this.setState({ entity: true, scrutinizer: false, member: false });
  scrutinizerClick = () =>
    this.setState({ scrutinizer: true, entity: false, member: false });
  memberClick = () =>
    this.setState({ member: true, entity: false, scrutinizer: false });

  render() {
    console.log("hu singin nu render", this.props);
    return (
      <>
        {" "}
        <div className="header">
          <h4>
            <span className="hover" onClick={this.props.checking}>
              <Link style={{ color: "green" }} to="sign-up">
                Sign Up
              </Link>
            </span>
            | <span style={{ color: "green" }}> Sign In</span>{" "}
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
              MEMBER
            </label>
          </div>
        </div>
        {this.state.entity ? <EntityIn /> : null}
        {this.state.scrutinizer ? <ScrutinizerIn /> : null}
        {this.state.member ? <MemberIn /> : null}
      </>
    );
  }
}
export default SignIn;
