import React, { Component } from "react";
//import ReactDOM from "react-dom";
import { Grid, Row, Col } from "react-bootstrap";
import teamNative from "../IMGs/Team/teamNative.jpg";


class About extends Component {

  render() {
    return (
      <div id="team" className="About">
        <Grid>
          <Row>
        <h1 className="title mb-4 font-bold">Meet the Team</h1>
        <h3>We are RMuseLive. Our goal is to help Artists become successful.</h3>
        </Row>
        <Row >
          <Col sm={5} md={2}>
            <img src="" alt="" />
            <h4>Talitha Villaloboes</h4>
            <p>Founder/Front-End </p>
            <p>Talitha created the idea of RMuse Live. She wanted a palce for Artist to come and share their
              work with others and collabrate with businesses.
            </p>
          </Col>
          <Col sm={5} md={2}>
            <img src="" alt="" />
            <h4>Julia Wolf-Martinez</h4>
            <p>Front-End/CSS Styling </p>
            <p>Julia help design the website.</p>
          </Col>
          <Col sm={5} md={2}>
            <img src="" alt="" />
            <h4>Robert Hawk</h4>
            <p>Back-End</p>
            <p>Robert managed the back-end.</p>
          </Col>
          <Col sm={5} md={2}>
            <img src="" alt="" />
            <h4>John Lyons</h4>
            <p>Front-End</p>
          </Col>
          <Col sm={5} md={2} id="teamNative">
          <img src={teamNative} className="img-circle" alt="teamNative" />
           <h4>Anthony Dickerson</h4>
            <p>Native Response</p>
          </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default About;
