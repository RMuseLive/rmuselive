import React, { Component } from "react";
//import ReactDOM from "react-dom";
import { Grid, Row, Col } from "react-bootstrap";

class About extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Col sm={2}>
            <img src="" alt="" />
            <p>Talitha </p>
            <p>Founder/Front-End </p>
          </Col>
          <Col sm={2}>
            <img src="" alt="" />
            <p>Julia Wolf-Martinez</p>
            <p>Front-End/CSS Styling </p>
          </Col>
          <Col sm={2}>
            <img src="" alt="" />
            <p>Robert Hawk</p>
            <p>Back-End</p>
          </Col>
          <Col sm={2}>
            <img src="" alt="" />
            <p>John Lyons</p>
            <p>Front-End</p>
          </Col>
          <Col sm={2}>
            <img src="" alt="" />
            <p>Anthony</p>
            <p>Native Response</p>
          </Col>
        </Grid>
      </div>
    );
  }
}

export default About;
