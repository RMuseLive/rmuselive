import React, { Component } from "react";
//import { Link } from "react-router-dom";
import { Grid, Row, Col } from "react-bootstrap";




/*Trending title goes at top of page. Different categories of trending artists. Such as Photography, Filmagraphy, Music, vidoes, etc.
 columns of three or four.
Next 3 step sin up. Sign Up - Customize - Connect. Maybe move the Navbar in landing page or
leave it in the header.  Maybe change the navbar to navigate around the page.*/

class Home extends Component {
  render() {
    return (
      //Insert columns here.
      <div className="App">
        <h1>
         Welcome to Rmuse Live
        </h1>
<div>
        <h1>
        <a href="/calendar">Events</a> 
        </h1>
        
        </div>
          <Grid>
            <Row>
          <div className="col-med-2">
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
</Row>
</Grid>
        <div>
        
        <Grid>
        <h2 className="text-left">What's New</h2>
        <Row className="row-1">
          <Col md={4}>
            <img
              src="https://artist.com/art-recognition-and-education/wp-content/themes/artist-blog/media-files/2016/05/abstract-6.jpg"
              alt="0" id="abstract" className="img-rounded"
            />
            </Col>
          <Col md={4}>
            <img
              
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT48vG9Sm_ruh5PNYT0i1Xcv5pK9QGLcbsyTCRD99apRppj-vJ"
              alt="0" className="img-rounded"
            />
            </Col>
           <Col md={4}>
            <img
              
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQunCS-EFtX8J1YSVS_1osMXka5mnNfM94SMSCqptyB68OXQKgd4A"
              alt="0" className="img-rounded"
            />
          </Col>
        </Row>
        <Row className="row-2">
          <Col md={4}>
            <img
              
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrHT83tfWCefPtvaCJmuZSGhWh5QeQox7N9Cs_gfrzXi8qcZO5Wg"
              alt="0" className="img-rounded"
            />
            </Col>
           <Col md={4}>
            <img
              
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL0Mn-7xSid9r_Ie462yG7vGxajheppssAx_7cev-jd5tZUrR0Hw"
              alt="0" className="img-rounded"
            />
            </Col>
           <Col md={4}>
            <img
              
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ41mFSGyzDhlkz1-SldeF0co5LHGE4h3cqczH94TReoOef7O3N1A"
              alt="0" className="img-rounded"
            />
          </Col>
        </Row>
        <Row className="row-3">
          <Col md={4}>
            <img
              
              src="https://artist.com/art-recognition-and-education/wp-content/themes/artist-blog/media-files/2016/05/abstract-6.jpg"
              alt="0" id="abstract" className="img-rounded"
            />
            </Col>
          <Col md={4}>
            <img
              
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5HBW7xEwqY1k1DGaT5ct03OUj0zFuaieszywDyEAwqJ7v32nKgQ"
              alt="1" className="img-rounded"
            />
            </Col>
         <Col md={4}>
            <img
              
              src="https://artist.com/art-recognition-and-education/wp-content/themes/artist-blog/media-files/2016/05/abstract-6.jpg"
              alt="0" id="abstract" className="img-rounded"
            />
          </Col>
        </Row>
        <h2 className="text-left">Most Popular</h2>
        <Row className="row-4">
          <Col md={4}>
            <img
              
              src="https://artist.com/art-recognition-and-education/wp-content/themes/artist-blog/media-files/2016/05/abstract-6.jpg"
              alt="0" id="abstract" className="img-rounded"
            />
            </Col>
           <Col md={4}>
            <img
              
              src="https://artist.com/art-recognition-and-education/wp-content/themes/artist-blog/media-files/2016/05/abstract-6.jpg"
              alt="0" id="abstract" className="img-rounded"
            />
            </Col>
           <Col md={4}>
            <img
              
              src="https://artist.com/art-recognition-and-education/wp-content/themes/artist-blog/media-files/2016/05/abstract-6.jpg"
              alt="0" id="abstract" className="img-rounded"
            />
</Col>
            </Row>

            <Row className="row-5">
        <Col md={4}>
            <img
              
              src="https://artist.com/art-recognition-and-education/wp-content/themes/artist-blog/media-files/2016/05/abstract-6.jpg"
              alt="0" id="abstract" className="img-rounded"
            />
            </Col>
            <Col md={4}>
            <img
              
              src="https://artist.com/art-recognition-and-education/wp-content/themes/artist-blog/media-files/2016/05/abstract-6.jpg"
              alt="0" id="abstract" className="img-rounded"
            />
            </Col>
           <Col md={4}>
            <img
              
              src="https://artist.com/art-recognition-and-education/wp-content/themes/artist-blog/media-files/2016/05/abstract-6.jpg"
              alt="0" id="abstract" className="img-rounded"
            />
        </Col>
        </Row>

        <h2 className="text-left">Trending Now</h2>

        <Row className="row-6">
        <Col md={4}>
          <img
            
            src="https://artist.com/art-recognition-and-education/wp-content/themes/artist-blog/media-files/2016/05/abstract-6.jpg"
            alt="0" id="abstract" className="img-rounded"
          />
          </Col>
           <Col md={4}>
          <im
            className="picture-grid"
            src="https://artist.com/art-recognition-and-education/wp-content/themes/artist-blog/media-files/2016/05/abstract-6.jpg"
            alt="0" id="abstract" className="img-rounded"
          />
          </Col>
          <Col md={4}>
          <im
            className="picture-grid"
            src="https://artist.com/art-recognition-and-education/wp-content/themes/artist-blog/media-files/2016/05/abstract-6.jpg"
            alt="0" id="abstract" className="img-rounded"
          />
          </Col>
        </Row>
      </Grid>
    </div>
  </div>

);
}
            
     
 
}
export default Home;
