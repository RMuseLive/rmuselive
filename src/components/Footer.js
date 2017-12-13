import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Grid, Row, Col } from "react-bootstrap";
import "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col sm={4} />
            <hr className="clearfix w-100 d-md-none" />
            <h5 className="title mb-4 font-bold">WHO WE ARE</h5>
            <p>
              Here you can use rows and columns here to organize your footer
              content.
            </p>

            <Col sm={4}>
              <p>
                <a href="#!">CONTACT US</a>
                </p>
              <p>
                <a href="#!">ABOUT US</a>
              </p>
              <p>
                <a href="#!">FAQ</a>
              </p>
              <p>
                <a href="#!">SUPPORT</a>
              </p>
            </Col>

            <Col sm={4}>
              <h5 className="title mb-4 font-bold">Address</h5>
              <p>
                <i className="fa fa-home mr-3" /> Scottsdale, AZ 852, US
              </p>
              <p>
                <i className="fa fa-envelope mr-3" /> info@example.com
              </p>
              <p>
                <i className="fa fa-phone mr-3" /> + 01 234 567 88
              </p>
              <p>
                <i className="fa fa-print mr-3" /> + 01 234 567 89
              </p>
            </Col>

            <Col sm={4}>
              <div class="social-section mt-2 ">
                <h5 className="title mb-4 font-bold">Follow Us</h5>
                <a type="button" className="btn-floating btn-small btn-fb">
                  <i className="fa fa-facebook" /> Facebook
                </a>

                <a type="button" className="btn-floating btn-small btn-tw">
                  <i className="fa fa-twitter" /> Twitter
                </a>

                <a type="button" className="btn-floating btn-small btn-gplus">
                  <i className="fa fa-google-plus" /> Google+
                </a>

                <a type="button" className="btn-floating btn-small btn-ingram">
                  <i className="fa fa-instagram" /> Instagram
                </a>
              </div>
            </Col>
            <Col sm={2}>
              <div className="footer-copyright">
                <div className="container-fluid">
                  © 2017 Copyright:{" "}
                  <a href="https://www.RMuse.live"> RMuse.live</a>
                </div>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
export default Footer;
