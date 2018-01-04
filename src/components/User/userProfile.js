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
    userProfile(this.props.data).then(
        userProfile => {
            this.setState({userProfile, loading:false})
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
            user.map((user, i) =>
                <member key={i} {...user} />
                ) :
                <span> No User loaded...</span>
                }
                
            }
            {(error) ? <p> error loading user: error</p> : ""}
            </div>

)}
}
