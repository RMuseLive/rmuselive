import React, { Component } from "react";
import { connect } from "react-redux";
// import RegisterLoginModal from "./RegisterLoginModal";
import ReactFilestack from "filestack-react";


//filestack button moved from header
class ProfileScreen extends Component {
<<<<<<< Updated upstream
=======
  state = {
    userImages: null,
    userInfo: null
  };

  componentWillMount() {
    const thisPath = window.location.href.split("/");
    const username = thisPath[thisPath.length - 1];

    agent.requests
      .get(`/user/${username}`)
      .then(res => this.setState({ userImages: res }))
      .catch(error => {
        console.log("PROFILE SCREEN FETCH ERROR", error);
      });
  }

  handleFilestackSuccess = blob => {
    for (var file of blob.filesUploaded) {
      console.log(agent.token);
      agent.requests
        .post("/media", {uri: file.url, type: file.mimetype})
        .catch(error => {
          console.log(JSON.stringify(error))
        })
    }



  };

>>>>>>> Stashed changes
  render() {
    return (
      <header className="Header">
      <div>
<<<<<<< Updated upstream
      <text>User Page</text>
    </div>
    
        <ReactFilestack
          apikey={"Av2OyyRf4Q16K5npkOJpBz"}
          buttonText="FileStack Open"
          buttonClass="FileStack"
          // options={options}
          onSuccess={this.yourCallbackFunction}
        />
      </header>
=======
        {userImages && (
          <div>
            <text>User Page</text>

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
>>>>>>> Stashed changes
    );
  }
}

export default ProfileScreen;