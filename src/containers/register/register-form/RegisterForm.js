import React from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";

const options = [
  { value: "Male", label: "Male" },
  { value: "Female", label: "Female" }
];

const RegisterForm = ({ handleRegister }) => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => {
    console.log(data);
    handleRegister();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-label">{"Full name"}</div>
      <div className="form-field">
        <input type="text" name="fullName" ref={register({ required: true })} />
      </div>
      <div>{errors.fullName && <span>This field is required</span>}</div>

      <div className="form-label">{"Preffered name"}</div>
      <div className="form-field">
        {" "}
        <input
          type="text"
          name="prefferedName"
          ref={register({ required: true })}
        />
      </div>
      <div>{errors.prefferedName && <span>This field is required</span>}</div>

      <div className="form-label">{"Date of birth"}</div>
      <div className="form-field">
        {" "}
        <input type="text" name="dob" ref={register({ required: true })} />
      </div>
      <div>{errors.dob && <span>This field is required</span>}</div>

      <div className="form-label">{"Gender"}</div>
      <div className="form-field select">
        {" "}
        <Select
          defaultValue={options.filter(o => o.value === "Male")}
          options={options}
        />
      </div>
      <div>{errors.gender && <span>This field is required</span>}</div>

      <div className="form-label">{"Email"}</div>
      <div className="form-field">
        {" "}
        <input type="text" name="email" ref={register({ required: true })} />
      </div>
      <div>{errors.email && <span>This field is required</span>}</div>

      <div className="form-label">{"Password"}</div>
      <div className="form-field">
        {" "}
        <input
          type="password"
          name="password"
          ref={register({ required: true })}
        />
      </div>
      <div>{errors.password && <span>This field is required</span>}</div>

      <div className="form-label">{"Confirm password"}</div>
      <div className="form-field">
        {" "}
        <input
          type="password"
          name="confirmPassword"
          ref={register({ required: true })}
        />
      </div>
      <div>{errors.confirmPassword && <span>This field is required</span>}</div>

      <input type="submit" className="main-button" value="Register" />
    </form>
  );
};

export default RegisterForm;
