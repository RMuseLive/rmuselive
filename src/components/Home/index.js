import React, { Component } from "react";
//import { Link } from "react-router-dom";
import { Grid, Row, Col } from "react-bootstrap";
// import User from "./components/User";

// import Banner from "./Banner";

/*Trending title goes at top of page. Different categories of trending artists. Such as Photography, Filmagraphy, Music, vidoes, etc.
 columns of three or four.
Next 3 step sin up. Sign Up - Customize - Connect. Maybe move the Navbar in landing page or
leave it in the header.  Maybe change the navbar to navigate around the page.*/

class Home extends Component {
  render() {
    return (
      //Insert columns here.
      <div className="App">
        <h1>
          <a
            href=""
            className="typewrite"
            data-period="2000"
            data-type="[ &quot;Hi, Im an Artist.&quot;, &quot;I am Creative.&quot;, &quot;I Love Design.&quot;, &quot;I Love to Develop.&quot;]"
          >
            <span className="wrap" />
          </a>
        </h1>

        <div>
          <form>
            <label>
              <input
                type="text"
                name="name"
                placeholder="searh artist name or art"
              />
            </label>
            <button
              id="search-btn"
              type="button"
              className="btn btn-submit btn-sm"
            >
              Go
            </button>
          </form>
        </div>
        <div>
          <h2>Trending Now</h2>
          <Grid>
            <Row>
              <Col sm={4}>
                <img src="Music.png" />
                <p>Picture</p>
              </Col>
              <Col sm={4}>
                {/* <img /> */}
                <p>Picture</p>
              </Col>
              <Col sm={4}>
                {/* <img /> */}
                <p>Picture</p>
              </Col>
            </Row>
            <Row>
              <Col sm={4}>
                {/* <img /> */}
                <p>Picture</p>
              </Col>
              <Col sm={4}>
                {/* <img /> */}
                <p>Picture</p>
              </Col>
              <Col sm={4}>
                {/* <img /> */}
                <p>Picture</p>
              </Col>
            </Row>
            <Row>
              <Col sm={4}>
                {/* <img /> */}
                <p>Picture</p>
              </Col>
              <Col sm={4}>
                {/* <img /> */}
                <p>Picture</p>
              </Col>
              <Col sm={4}>
                {/* <img /> */}
                <p>Picture</p>
              </Col>
            </Row>
            <h2>Join Now</h2>
            <Row>
              <Col sm={4}>
                {/* <img /> */}
                <p>Picture</p>
              </Col>
              <Col sm={4}>
                {/* <img /> */}
                <p>Picture</p>
              </Col>
              <Col sm={4}>
                {/* <img /> */}
                <p>Picture</p>
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
  /*3 step sign up process goes somewhere down here.
      1. Sign Up
      2. Cutomize Profile
      3. Connect
      Two buttons one says Join Now the other says Explore.
      */
}
export default Home;
