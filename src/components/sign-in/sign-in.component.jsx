import { useState } from "react";

import {
  authenticateAndCreateOrSigninUserGoogle,
  signInUserWithEmailAndPassword,
} from "../../services/authentication-and-authorization.service";

import Button, { ButtonTypes } from "../button/button.component";
import InputForm from "../input-form/input-form.component";

import { defaultUserForm } from "../../utils/constants.js";


import { useNavigate } from "react-router-dom";
import { FormContainer } from "./sign-in.styles";

const SignIn = () => {
  const [userForm, setUsersForm] = useState(defaultUserForm);
  const { email, password } = userForm;

  const resetUsersForm = () => setUsersForm(defaultUserForm);

  const onChangeHandler = (event) => {
    const { value, name } = event.target;

    setUsersForm({
      ...userForm,
      [name]: value,
    });
  };

  const navigate = useNavigate();

  const onSubmitListener = async (ev) => {
    ev.preventDefault();
    const { email, password } = userForm;
    if (email == null || email === "" || password == null || password === "") {
      alert("Email and password cannot be empty");
      return;
    }
    if (password.length < 6) {
      return alert("Password has to have at least 6 characters.");
    }
    try {
      await signInUserWithEmailAndPassword(userForm.email, userForm.password);
      //reset form inputs
      resetUsersForm();
      navigate("/");
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("No such User");
          break;
        default:
          alert("Some problem");
      }
    }
  };

  const signWithGoogleHandler = async () => {
    try {
      const result = await authenticateAndCreateOrSigninUserGoogle();
      if (result.user.uid) navigate("/");
      return;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FormContainer>
      <form onSubmit={onSubmitListener}>
        <InputForm
          name="email"
          type="email"
          value={email}
          onChangeHandler={onChangeHandler}
          label="Email"
        ></InputForm>
        <InputForm
          name="password"
          type="password"
          value={password}
          onChangeHandler={onChangeHandler}
          label="Password"
        ></InputForm>
        <Button
          type="submit"
          value="Sign In with Email and Password"
          btnType={ButtonTypes.default}
        />
        <Button
          type="button"
          value="Sign In with Gmail"
          onClick={signWithGoogleHandler}
          btnType={ButtonTypes.google}
        />
      </form>
    </FormContainer>
  );
};

export default SignIn;
