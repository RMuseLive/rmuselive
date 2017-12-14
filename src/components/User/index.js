import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Grid, Row, Col } from "react-bootstrap";

class User extends Component {
  render() {
    return (
      //Insert columns here.
      <div className="App">
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
          <Grid>
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
          </Grid>
        </div>
      </div>
    );
  }
}

export default User;
