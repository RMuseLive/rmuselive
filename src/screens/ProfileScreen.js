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
    userImages: null,
    userInfo: null
  };

  componentWillMount() {
    const thisPath = window.location.href.split("/");
    const username = thisPath[thisPath.length - 1];

    agent.requests
      .get(`/user/${username}`)

      .then(res => this.setState({following: res.following, userImages: res.images }))

      .catch(error => {
        console.log("PROFILE SCREEN FETCH ERROR", error);
      });
  }

  handleFilestackSuccess = blob => {
    for (var file of blob.filesUploaded) {
      console.log(agent.token);
      agent.setToken(window.localStorage.getItem("jwt"));
      agent.requests
        .post("/media", {uri: file.url, type: file.mimetype})
        .catch(error => {
          console.log(JSON.stringify(error))
        })
    }
  };

  followbutton =() => {
    if (this.state.token) {
      if (this.state.following) {
        <button>unfollow</button>} else{<button>follow</button>}
      } else {
      }
      }; 
 

  render() {
    const { userImages, userInfo } = this.state;
    console.log("PROFILE SCREEN STATE", userImages);
    return (
      <div>
        {userImages && (
          <div>
            <text>User Page</text>
            

            { this.followbutton }
              {this.state.userImages.map(a => {


              //once images are in the database, change the p tag to an img tag
              //set the source to the image source given in the response (it will be something like a.imageUrl)
              //<img src={a.imageUrl} />
              return (
                <div>
                  <h1>User Images will go here</h1>
                  <p>{a.uri}</p>
                </div>
              );
            })}
            <ReactFilestack
              apikey={"Av2OyyRf4Q16K5npkOJpBz"}
              buttonText="FileStack Open"
              buttonClass="FileStack"

              // options={options}
              onSuccess={blob => this.handleFilestackSuccess(blob)}
            />
          </div>
        )}
      </div>
    );
  }
}

export default ProfileScreen;

// {this.state.userInfo.map(a => {
//   //change the tags to load the user information given in the response (CHECK YOUR CONSOLE LOGS)
//   //IF THESE ARE UNDEFINED, CHANGE THE SECOND PART OF THE NAME (a.somethingElse)
//   <div>
//     <p>{a.username}</p>
//     <p>{a.firstName}</p>
//     <p>{a.lastName}</p>
//   </div>;
// })}
//--------------------------------------

// <div className="card profile">
//                 <div className="card-block">
//                   <img className="img-circle avatar" src={user.data.avatar} />
//                   <h4 className="card-title">Hey{user.data.nickname}!</h4>
//                   <div className="card-text">
//                     <p>You have permission to perform the following:</p>
//                     <ul className="permissions">
//                       <li>Create your Page</li>
//                       <li>Edit your Profile</li>
//                       <li>Follow / unfollow other User</li>
//                     </ul>
//                     <Link className="btn btn-primary" to="/logout">
//                       Logout
//                     </Link>
//                     <a href="/usersettingscreen">Settings</a>

//                     <button className="btn btn-primary">Logout</button>
