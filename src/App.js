import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

//import Banner from "./component/Home/Banner";

class App extends Component {
  render() {
    return (
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
        <Header className="App-header" />

        <div>
          <form>
            <label>
              Search:
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
        <Footer className="App-footer" />
      </div>
    );
  }
}

export default App;
