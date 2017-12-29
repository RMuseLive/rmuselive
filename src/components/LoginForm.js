
import React, { Component } from "react";
import { Button } from "react-bootstrap";
// import bootstrap from "react-bootstrap";

// import LoginSettings from "./src/components/User/Settings";
const ROOT_URL = "https://rmuse.live/api/1/login";



class LoginForm extends Component {
 constructor() {
   super();
   this.state = {
    username: "",
    password: "",

   };
 }

   
handleInputonChange = event => {
this.setState({
   [event.target.name]: event.target.value
   });
 };

handleOnSubmit = event => {
  fetch(ROOT_URL)
  .then(results => {
    return results.json();
}).then(data => {})
event.preventDefault();
// this.props.onSubmit(this.state.email, this.state.password);
 };
    render() {
        return (
          // {/* <div> */}
        //  {/* <nav class="app-bar">LOGIN</nav> */}
        //  </div>
      <div> 
        
                 <form onSubmit={this.handleOnSubmit}>
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
    onChange={() => console.log("fun Fun fun")} />
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"
    onChange={() => console.log("fun Fun fun")}/>
  </div>
  <div className="form-check">
    {/* <label className="form-check-label">
      <input type="checkbox" className="form-check-input"/>
      Check me out
    </label> */}
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
<div>
               <br/>
                 <div
                   type="password"
                   hintText="Enter your Password"
                   floatingLabelText="Password"
                   onChange = {(event,newValue) => this.setState({password:newValue})}
                   />
                 <br/>
                 <Button label="Submit" primary={true} onClick= 
                 {(event) =>  event.preventDefault() && 
                 fetch(ROOT_URL).then(response => console.log(response))} />
                   {/* this.handleClick(event)} /> */}
            
          </div>
  </div>
        );
      }
    }
    export default LoginForm;
    
