import React, { Component } from "react";
// import { render } from "react-dom";
import { Button } from 'react-bootstrap';

class SignupForm extends Component {
    state = {};
    handleInputonChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    };
    handleOnSubmit = event => {
   event.preventDefault();
   this.props.onSubmit(this.state.FirstName,this.state.LastName,this.state.password);
    };

render() {
    return(
<div>
    <form>
        <div className="form-group">
            <label for="FirstName">First Name</label>
            <input type="FirstName" className="form-control" id="FirstName" placeholder="FirstName"/>
            <input type="LastName" className="form-control" id="LastName" placeholder="LastName"/>
            <input type="UserName" className="form-control" id="UserName" placeholder="UserName"/>
            <input type="Password" className="form-control" id="Password" placeholder="Password"/>
              <button type="submit" className="btn btn-primary">Submit</button>
  </div>
   </form>
   <div>
       <br/>
       <div
       type="Username"
       type="password"
       floatingLabelText="Password"
       onChange = {(event, newValue) => this.setState({Username:newValue})}
    
       />
       <br/>
       <Button label="Submit" primary={true} onClick={(event) =>
           this.handleClick(event)}/>
           </div>
           </div>
    );
    }
    }
    export default SignupForm;
