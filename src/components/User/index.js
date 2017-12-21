import React, { Component } from "react";
//import { Link } from "react-router-dom";
//import { connect } from "react-redux";
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
                placeholder="search artist name or art"
              />
            </label>
            <div className="col-xs-2">
        <form className="search">
          <div className="input-group" >
          <label for="ex1"></label>
        <input type="text" className="form-control" placeholder="Search artist name or art"/>
         <div className="input-group-btn">
            <button className="btn btn-default" type="submit">
        <i className="glyphicon glyphicon-search"></i>
          </button>
        </div>
        </div>
</form>
        </div>
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
