import { Fragment } from "react";

const ContactPage = function () {
  return (
    <Fragment>
      <h1>Contact me</h1>
      <p>
        This webpage presents simple E-commerce application created with help of
        Firebase and React.js. For more info about author see{" "}
        <a href="" style={{ color: "grey", textDecoration: "none" }}>
          GitHub
        </a>{" "}
        account, <a href="" style={{ color: "grey", textDecoration: "none" }}>LinkedIn Profile</a> or author <a href="" style={{ color: "grey", textDecoration: "none" }}>website</a>.
        <br />
        <br />
        <em>Thank you for visiting!</em>
      </p>
    </Fragment>
  );
};

export default ContactPage;
