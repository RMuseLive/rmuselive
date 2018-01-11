import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";


class Footer extends Component {
  render() {
    return (
      <div className="App-footer">
        <Grid>
          <Row>
            <Col sm={3}>
             
              <h5 className="title mb-4 font-bold">WHO WE ARE</h5>
              <p>
               We are an Organization that helps Artist of all kinds succeed.
              </p>
            </Col>
           
            <Col sm={3}>
              
              <p>
                <a href="/contact">CONTACT US</a>
                 </p>
              <p>
                <a href="/about">ABOUT US</a> 
              </p>
              <p> 
                <a href="/faq">FAQ</a>
              </p>
              <p>
                <a href="/support">SUPPORT</a> 
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
                <SocialIcon className="facbook" url="https://www.facebook.com/RMuse.Live/" />
                <SocialIcon className="twitter" url="https://twitter.com/RMUSE_Live?edit=true" />
                <SocialIcon className="instagram" url="https://www.instagram.com/rmuse.live/?hl=en" />
              
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
