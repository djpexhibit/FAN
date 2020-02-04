import React from "react";

import LoginForm from "./login-form/LoginForm";

import "./Home.scss";

class Home extends React.Component {
  handleLogin = () => {
    this.props.history.push("/dashboard");
  };
  handleCreteAccount = () => {
    this.props.history.push("/register");
  };
  render() {
    return (
      <div className="home">
        <div className="left-panel">
          <div>{"LOGO goes here..."}</div>
          <button
            onClick={this.handleCreteAccount}
            className="main-button-round"
          >
            {"Create account"}
          </button>
        </div>
        <div className="right-panel">
          <div className="login-form">
            <LoginForm handleLogin={this.handleLogin} />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
