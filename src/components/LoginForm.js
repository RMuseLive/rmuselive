import React from "react";
import TextFieldGroup from "../common/TextFieldGroup";
import validateInput from ".../../server/shared/validations/login";
import { connect } from "react-redux";
import { login } from "../../actions/authActions.js";
import Header from "./components/Header";

class LoginForm extends Component {
    render() {
        return(
    constructor(props) {
        super(props);
        this.state = {
            identifier: '',
            password: '',
            isLoading: false
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    isValid() {
       const { errors, isValid } = validateInput(this.state);
    
}
return isValid();
}
);
}

export default LoginForm;