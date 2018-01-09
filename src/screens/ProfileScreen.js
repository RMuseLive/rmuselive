import React, { Component } from "react";
// import { connect } from "react-redux";
// import RegisterLoginModal from "./RegisterLoginModal";
import { NavLink as Link } from "react-router-dom";
import ReactFilestack from "filestack-react";
import UserSetting from "./UserSettingScreen";

import agent from "../agent";


//filestack button moved from header
class ProfileScreen extends Component {
  state = {
    user: null
  };

  componentDidMount() {
    const thisPath = window.location.href.split("/");
    const username = thisPath[thisPath.length - 1];
    agent.requests
      .get(`${username}`)
      .then(res => this.setState({ user: res }))
      .catch(error => {
        console.log("PROFILE SCREEN FETCH ERROR", error);
      });
  }

  handleFilestackSuccess = () => {
    alert("Filestack success!");
  };

  render() {
    const user = this.state.user;
    console.log("PROFILE SCREEN STATE", user);
    return (
      <div>
        {user && (
          <div>
            <header className="Header">
              <text>User Page</text>
              <div className="card profile">
                <div className="card-block">
                  <img className="img-circle avatar" src={user.data.avatar} />
                  <h4 className="card-title">Hey{user.data.nickname}!</h4>
                  <div className="card-text">
                    <p>You have permission to perform the following:</p>
                    <ul className="permissions">
                      <li>Create your Page</li>
                      <li>Edit your Profile</li>
                      <li>Follow / unfollow other User</li>
                    </ul>
                    <Link className="btn btn-primary" to="/logout">
                      Logout
                    </Link>
                   <a href="/usersettingscreen">Settings</a>
                    <button className="btn btn-primary">Logout</button>
                   
                    <ReactFilestack
                      apikey={"Av2OyyRf4Q16K5npkOJpBz"}
                      buttonText="FileStack Open"
                      buttonClass="FileStack"
                      // options={options}
                      onSuccess={() => this.handleFilestackSuccess()}
                    />
                  </div>
                </div>
              </div>
            </header>
          </div>
        )}
      </div>
    );
  }
}
// Profile.propTypes = {
//   user: PropTypes.object.isRequired
// };

// Profile.defaultProps ={
//   user: {
//     id: 1,
//     data: {
//       nickname: '',
//       avatar: ""

//     }
//   }
// };

export default ProfileScreen;
