import { useState } from "react";
import InputForm from "../input-form/input-form.component";
import { defaultUserForm } from "../../utils/constants.js";
import Button, { ButtonTypes } from "../button/button.component";
import { authenticateAndCreateUserEmail } from "../../services/authentication-and-authorization.service";
import { FormContainer } from "../sign-in/sign-in.styles";

const SignUp = () => {
  const [userForm, setUsersForm] = useState(defaultUserForm);
  const { email, displayName, password, confirmPassword } = userForm;

  const onChangeHandler = (ev) => {
    const { value, name } = ev.target;
    setUsersForm({ ...userForm, [name]: value });
  };

  const resetUsersForm = () => setUsersForm(defaultUserForm);

  const onSubmitHandler = async (ev) => {
    ev.preventDefault();
    const { email, password, displayName, confirmPassword } = userForm;
    if (
      email === null ||
      email === "" ||
      password === null ||
      password === "" ||
      displayName === null ||
      displayName === ""
    ) {
      alert("Email and password cannot be empty");
      return;
    }
    if (password.length < 6) {
      return alert("Password has to have at least 6 characters.");
    }
    if (password !== confirmPassword) return alert("Passwords don't match");

    const response = await authenticateAndCreateUserEmail(
      email,
      password,
      displayName
    );
    resetUsersForm();
  };

  return (
    <FormContainer>
      <form onSubmit={onSubmitHandler}>
        <InputForm
          name="displayName"
          type="text"
          value={displayName}
          onChangeHandler={onChangeHandler}
          label="Display Name"
        ></InputForm>
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
        <InputForm
          name="confirmPassword"
          type="password"
          value={confirmPassword}
          onChangeHandler={onChangeHandler}
          label="Confirm Password"
        ></InputForm>
        <Button
          type="submit"
          value="Create Account"
          btnType={ButtonTypes.default}
        />
      </form>
    </FormContainer>
  );
};

export default SignUp;
