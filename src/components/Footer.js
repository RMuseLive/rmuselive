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
            <Col lg={4} />
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

            <Col sm={3}>
              <h5 className="title mb-4 font-bold">Follow Us</h5>
              <a type="button" className="btn-floating btn-small btn-fb">
                Facebook
                <i className="fa fa-facebook" />
              </a>

              <a type="button" className="btn-floating btn-small btn-tw">
                Twitter
                <i className="fa fa-twitter" />
              </a>

              <a type="button" className="btn-floating btn-small btn-gplus">
                Google+
                <i className="fa fa-google-plus" />
              </a>

              <a type="button" className="btn-floating btn-small btn-ingram">
                Instagram
                <i className="fa fa-instagram" />
              </a>
            </Col>
          </Row>
        </Grid>
        {/* <div className="container">
          <hr className="clearfix w-100 d-md-none" />
          <div className="row my-4">
            
            <p>
              Here you can use rows and columns here to organize your footer
              content.
            </p>
          </div>

          <div className="col-md-4 col-lg-3">
            <div className="col-md-2 col-lg-2 ml-auto">
              <h5 className="title mb-4 font-bold">About</h5>
              <ul style={{ display: "inline" }}>
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
              </ul>
            </div>

            <h5 className="title mb-4 font-bold">Address</h5>
            <ul style={{ display: "inline" }}>
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
            </ul>
          </div>

          <div className="col-md-2 col-lg-2 text-center">
            <h5 className="title mb-4 font-bold">Address</h5>

            <div className="social-section mt-2 ">
              <a type="button" className="btn-floating btn-small btn-fb">
                Facebook
                <i className="fa fa-facebook" />
              </a>

              <a type="button" className="btn-floating btn-small btn-tw">
                Twitter
                <i className="fa fa-twitter" />
              </a>

              <a type="button" className="btn-floating btn-small btn-gplus">
                Google+
                <i className="fa fa-google-plus" />
              </a>

              <a type="button" className="btn-floating btn-small btn-ingram">
                Instagram
                <i className="fa fa-instagram" />
              </a>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container-fluid">
              © 2017 Copyright: <a href="https://www.RMuse.live"> RMuse.live</a>
            </div>
          </div>
        </div> */}
      </div>
    );
  }
}
export default Footer;
