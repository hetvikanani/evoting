import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import SignUp from "../Page/SignUp";
import SignIn from "../Page/SignIn";
import Loader from "../Loader/index";
import Loader2 from "../Loader/newLoader";
import ForgotPassword from "../Page/Forgot-password";
import AppLayout from "./AppLayout";
import { store } from "../../Redux/store";
import EntityDetails from "../Page/EntityDetails";
import MemberDetails from "../Page/MemberDetails";
import Scrutinizer from "../Page/SecunizerDetails";

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
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/entity-details">
              <EntityDetails />
            </Route>
            <Route exact path="/member-details">
              <MemberDetails />
            </Route>
            <Route exact path="/scrutinizer-details">
              <Scrutinizer />
            </Route>
            <AppLayout>
              {this.state.isLoading ? <Loader2 /> : null}
              
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
             
            </AppLayout>
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;

// e pic ne box ne no chale ne ?etle simple table new pg m aavu joy done etlu kidhu to hoy to ky dys mnen ni khbr
