import React from "react";
import { useForm } from "react-hook-form";

// import "./LoginForm.scss";

const LoginForm = ({ handleLogin }) => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => {
    console.log(data);
    handleLogin();
  };
  // console.log(watch("email"));
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-label">{"Email"}</div>
      <div className="form-field">
        <input
          name="email"
          type="text"
          placeholder="Input your email"
          ref={register({ required: true })}
        />
      </div>
      <div>{errors.password && <span>This field is required</span>}</div>

      <div className="form-label">{"Password"}</div>
      <div className="form-field">
        <input
          name="password"
          type="password"
          placeholder="Input your password"
          ref={register({ required: true })}
        />
      </div>
      <div>{errors.password && <span>This field is required</span>}</div>

      <input type="submit" className="main-button" value="Log in" />
    </form>
  );
};

export default LoginForm;
