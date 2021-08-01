import React, { useEffect, useState } from "react";
import { FormContainer, SignUpContainer } from "./sign-up.styles";

const SignUp = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [passwordConfirm, setPasswordConfirm] = useState("");

  useEffect(() => {}, [user.password, passwordConfirm]);

  const handleChange = (e) => {
    setUser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleChangePassword = (e) => {
    setPasswordConfirm((prevState) => e.target.value);
  };

  return (
    <SignUpContainer>
      <FormContainer action="/users" method="post">
        <label htmlFor="username">User name</label>
        <input
          type="text"
          name="username"
          id="username"
          onChange={handleChange}
          value={user.username}
        />
        <label htmlFor="email">email</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={handleChange}
          value={user.email}
        />
        <label htmlFor="password">Your password</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleChange}
          value={user.password}
        />
        <label htmlFor="passwordConfirm">Confirm your password</label>
        <input
          type="password"
          name="passwordConfirm"
          id="passwordConfirm"
          onChange={handleChangePassword}
          value={passwordConfirm}
        />
      </FormContainer>
    </SignUpContainer>
  );
};

export default SignUp;
