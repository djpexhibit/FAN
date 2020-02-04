import React from "react";

import RegisterForm from "./register-form/RegisterForm";

import "./Register.scss";

class Register extends React.Component {
  handleRegister = () => {
    console.log("Registering...");
  };

  render() {
    return (
      <div className="register">
        <div className="left-panel">{"Left Panel"}</div>
        <div className="right-panel">
          <RegisterForm handleRegister={this.handleRegister} />
        </div>
      </div>
    );
  }
}

export default Register;
