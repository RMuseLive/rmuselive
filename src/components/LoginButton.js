import React from "react";
import agent from '../agent';
// once signed in user must be verified.

function LoginButton(props) {
  return <button onClick={e => this.handleClick(e)}>Click Me</button>;
  function UserGreeting(props) {
    return <h3>Login</h3>;
  }
  function GuestGreeting(props) {
    return <h3>Please Sign up</h3>;
  }
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}
//login button should be gone when signed in and change to logout opption.

export default LoginButton;