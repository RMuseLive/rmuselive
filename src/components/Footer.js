import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";

import { NavLink, Router, Button } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col sm={3}>
              <hr className="clearfix w-100 d-md-none" />
              <h5 className="title mb-4 font-bold">WHO WE ARE</h5>
              <p>
                Here you can use rows and columns here to organize your footer
                content.
              </p>
            </Col>
            <hr className="clearfix w-100 d-md-none" />
            <Col sm={3}>
              {/* <NavLink to="/about">About</NavLink> */}
              <p>
                {/* <Link> */}
                <a href="/contact">CONTACT US</a>
                {/* </Link> */}
              </p>
              <p>
                {/* <Link> */}
                <a href="/about">ABOUT US</a>
                {/* </Link> */}
              </p>
              <p>
                {/* <Link> */}
                <a href="/faq">FAQ</a>
                {/* </Link> */}
              </p>
              <p>
                {/* <Link> */}
                <a href="/support">SUPPORT</a>
                {/* </Link> */}
              </p>
            </Col>

            <Col sm={3}>
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
              <div className="social-section mt-2 ">
                <h5 className="title mb-4 font-bold">Follow Us</h5>
                <a
                  href="https://www.facebook.com/RMuse.Live/"
                  type="button"
                  className="btn-floating btn-small btn-fb"
                >
                  <i className="fa fa-facebook" aria-hidden="true" />facebook
                </a>

                {/* <a type="button" className="btn-floating btn-small btn-tw">
                  <i className="fa fa-twitter" aria-hidden="true"/> 
                </a>

                <a type="button" className="btn-floating btn-small btn-gplus">
                  <i className="fa fa-google-plus" aria-hidden="true"/> 
                </a>

                <a type="button" className="btn-floating btn-small btn-ingram">
                  <i className="fa fa-instagram" aria-hidden="true"/> 
                </a> */}
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
