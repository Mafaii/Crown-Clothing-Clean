import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

import "./sign-in-out.styles.jsx";
import {
  SignInOutContainer,
  SignInOutSeparator,
} from "./sign-in-out.styles.jsx";

const SignInOut = () => {
  return (
    <SignInOutContainer>
      <div>
        <h2>SIGN IN</h2>
        <SignIn />
      </div>
      <SignInOutSeparator />
      <div>
        <h2>SIGN UP</h2>
        <SignUp />
      </div>
    </SignInOutContainer>
  );
};

export default SignInOut;
