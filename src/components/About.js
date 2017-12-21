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
        <h5 className="title mb-4 font-bold">Meet the Team</h5>
        <p>We are RMuseLive. Our goal is to help Artists become successful.</p>
        </Row>
        <Row >
          <Col sm={5} md={2}>
            <img src="" alt="" />
            <p>Talitha Villaloboes</p>
            <p>Founder/Front-End </p>
            <p>Talitha created the idea of RMuse Live. She wanted a palce for Artist to come and share their
              work with others and collabrate with businesses.
            </p>
          </Col>
          <Col sm={5} md={2}>
            <img src="" alt="" />
            <p>Julia Wolf-Martinez</p>
            <p>Front-End/CSS Styling </p>
            <p>Julia help design the website.</p>
          </Col>
          <Col sm={5} md={2}>
            <img src="" alt="" />
            <p>Robert Hawk</p>
            <p>Back-End</p>
            <p>Robert managed the back-end.</p>
          </Col>
          <Col sm={5} md={2}>
            <img src="" alt="" />
            <p>John Lyons</p>
            <p>Front-End</p>
          </Col>
          <Col sm={5} md={2} id="teamNative">
          <img src={teamNative} className="img-circle" alt="teamNative" />
            <p>Anthony Dickerson</p>
            <p>Native Response</p>
          </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default About;
