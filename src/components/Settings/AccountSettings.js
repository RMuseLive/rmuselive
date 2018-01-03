import React from "react";
import reactDOM from "react-dom";
import render from "react-dom";
import {
    BrowserRouter as Router,
    Route, 
    Link,
    Redirect,
    withRouter,
} from "react-router-dom"

const { Component } = React
const target = document.getElementById("react-container")


class userProfile extends Component {
    constructor(props) {
    super(props)
    this.state = {
        userProfile: [],
    loading: false,
        error: null
}
}
componentDidMount() {
    fetch("http://rmuse.live/api/user")
    .then(response => response.json())
    .then(json => {
    this.setState({loading:true})
    getUserProfile(this.props.data).then(
        userProfile => {
            this.setState({user, loading:false})
        },
        error => {
            this.setState({error, loading: false})
        });
        }
    )
}

componentWillUpdate() {
    console.log("updating lifecycle")
}
render() {
    const { user, loading, error } = this.state
    return (
        <div className="user">
            {(loading) ?
            <span>Loading</span> :
            (user.length) ?
            <User.map((user, i) =>
                <member key={i} {...user} />
                ) }
                <span> No User loaded...</span>

            }
            {(error) ? <p> error loading user: error</p> : ""}
            </div>
    )
}
}
        <form>
        <fieldset>
          <fieldset className="form-group">
            <input
              className="form-control"
              type="text"
              name="image"
              placeholder="URL of profile picture"
              value={this.state.image}
              onChange={this.handleInputChange}
            />
          </fieldset>

          <fieldset className="form-group">
            <input
              className="form-control form-control-lg"
              type="text"
              name="username"
              placeholder="Username"
              value={this.state.username}
              onChange={this.handleInputChange}
            />
          </fieldset>

          <fieldset className="form-group">
            <textarea
              className="form-control form-control-lg"
              rows="8"
              name="bio"
              placeholder="Short bio about you"
              value={this.state.bio}
              onChange={this.handleInputChange}
            />
          </fieldset>

          <fieldset className="form-group">
            <input
              className="form-control form-control-lg"
              type="email"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
          </fieldset>

          <fieldset className="form-group">
            <input
              className="form-control form-control-lg"
              type="password"
              name="password"
              placeholder="New Password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </fieldset>

          <button
            className="btn btn-lg btn-primary pull-xs-right"
            type="submit"
            disabled={this.state.inProgress}
          >
            Update Settings
          </button>
        </fieldset>
      </form>
    );
  }
  

export default AccountSettings;