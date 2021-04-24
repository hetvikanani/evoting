import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import SignUp from "../Page/SignUp";
import SignIn from "../Page/SignIn";
import Loader from "../Loader/index";
import Loader2 from "../Loader/newLoader";
import ForgotPassword from "../Page/Forgot-password";
import AppLayout from "./AppLayout";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
    };
  }

  changePage = () => {
    this.setState({ isLoading: true });
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 1500);
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 1500);
  }

  render() {
    console.log("app nu render ", this.state);
    return (
      <AppLayout>
        {this.state.isLoading ? <Loader2 /> : null}
        <Router>
          <Switch>
            <Route exact path="/">
              <SignIn checking={this.changePage} />
            </Route>
            <Route exact path="/sign-in">
              <SignIn checking={this.changePage} />
            </Route>
            <Route exact path="/sign-up">
              <SignUp check={this.changePage} />
            </Route>
            <Route exact path="/forgot-password">
              <ForgotPassword />
            </Route>
          </Switch>
        </Router>
      </AppLayout>
    );
  }
}

export default App;
