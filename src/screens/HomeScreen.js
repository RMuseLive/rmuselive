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
       
        </h1>

        
<div>
        <h1>
        <a href="/calendar">Events</a> 
        </h1>
        
        </div>
          <Grid>
            <Row>
          <div className="col-mid-2">
        <form className="search">
          <div className="input-group" >
          <label for="ex1"></label>
        <input type="text" className="form-control" placeholder="Search artist name or art"/>
         <div className="input-group-btn-small">
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD99J6NZvC-Zi6QvyCY6QdVmV4q77OYlZHhYvwtZ-8kKn4JF9rNQ"
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
              
              src="http://jazjaz.net/wp-content/uploads/2013/08/And-Light-Fell-On-Her-Face-Through-H1_thumb.jpg"
              alt="0"id="abstract" className="img-rounded"
            />
          </Col>
        </Row>
        <Row className="row-3">
          <Col md={4}>
            <img
              
              src="http://www.madhatterdc.com/wp-content/uploads/2014/06/Ajax_DJ.jpg"
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
              
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT2vEKPzYZYxz3Hv7rSOz_Oq90F4kby0rcDgUP_dpDojHn9hvk"
              alt="0" id="abstract" className="img-rounded"
            />
            </Col>
           <Col md={4}>
            <img
              
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxvq35IGqMD8nVbSiM-rZLmhGu38y6EfstD8vss86v-JDea98nlQ"
              alt="0" id="abstract" className="img-rounded"
            />
            </Col>
           <Col md={4}>
            <img
              
              src="http://s3.amazonaws.com/cdn.roosterteeth.com/uploads/images/cec5fe63-9aa2-4c4c-b094-e4d5a9fd3c55/md/2073008-1442720293891-8752281.jpg"
              alt="0" id="abstract" className="img-rounded"
            />
</Col>
            </Row>

            <Row className="row-5">
        <Col md={4}>
            <img
              
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI3wqJW5uUWMD8VlbDJZFP_DzpWdpgumQkoGl5j5tPVX7hZOMrcg"
              alt="0" id="abstract" className="img-rounded"
            />
            </Col>
            <Col md={4}>
            <img
              
              src="https://thumbs.dreamstime.com/b/couple-salsa-dance-bollywood-song-young-dancing-illustrated-abstract-line-art-54701355.jpg"
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
          <img
            
            src="https://artist.com/art-recognition-and-education/wp-content/themes/artist-blog/media-files/2016/05/abstract-6.jpg"
            alt="0" id="abstract" className="img-rounded"
          />
          </Col>

          <Col md={4}>
          <img
            
            src="http://wallportal.com/uploads/posts/jazz-art-wallpaper/jazz_art_wallpaper_004.jpg"
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
