import React, { Component } from "react";
//import { Link } from "react-router-dom";
import { Grid, Row, Col } from "react-bootstrap";
import Img from 'react-image';
import "../index.css"




/*Trending title goes at top of page. 
Different categories of trending artists. 
Such as Photography, Filmagraphy, Music, vidoes, etc.
 columns of three or four.
Next 3 step sign up.
 Sign Up - Customize - Connect.
  Maybe move the Navbar in landing page or
leave it in the header.
  Maybe change the navbar to navigate around the page.*/
console.log(this.props);
class Home extends Component {
  
  render() {
    return (
      //Insert columns here.
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
        <div>
        
          <Grid><h2 className="text-left">What's New</h2>
            <Row>
              <Col sm={4}>
                {
                <Img  
                  className="img-square" 
                  src="/images/003.JPG" 
                  alt="Saraine and me" 
                  />
               }
                <p className="text-justify">Picture</p>
                </Col>
              <Col sm={4}>
                { <Img 
                  className='image-square'
                  src="/images/bw.jpg"
                  alt="14 Street" 
                 /> }
                <p className="text-justify">Picture</p>
                </Col>
              <Col sm={4}>
                {<Img 
                  className='image-square'
                  src="/images/contact.jpg"
                  alt="14 Street" 
                 /> }
                <p className="text-justify">Picture</p>
              </Col>
            </Row>
            <Row>
              <Col sm={4}>
                {<Img 
                  className='image-square'
                  src="/images/gallery.jpg"
                  alt="14 Street" 
                 /> }
                <p className="text-justify">Picture</p>
                </Col>
              <Col sm={4}>
                {<Img 
                  className='image-square'
                  src="/images/index.jpg"
                  alt="14 Street" 
                 /> }
                <p className="text-justify">Picture</p>
                </Col>
                <Col sm={4}>
                {<Img 
                  className='image-square'
                  src="/images/portpholio.jpg"
                  alt="14 Street" 
                 /> }
                <p className="text-justify">Picture</p>
              </Col>
            </Row>
            <Row>
              <Col sm={4}>
                {<Img 
                  className='image-square'
                  src="/images/portpholio.jpg"
                  alt="14 Street" 
                 /> }
                <p className="text-justify">Picture</p>
              </Col>
              <Col sm={4}>
                {<Img 
                  className='image-square'
                  src="/images/portrait.jpg"
                  alt="14 Street" 
                 />}
                <p className="text-justify">Picture</p>
              </Col>
              <Col sm={4}>
                {<Img 
                  className='image-square'
                  src="/images/springbloosom.jpg"
                  alt="14 Street" 
                 />}
                <p className="text-justify">Picture</p>
              </Col>
            </Row>
            <h2 className="text-left">Most Popular</h2>
            <Row>
              <Col sm={4}>
                {<Img 
                  className='image-square'
                  src="/images/stillife.jpg"
                  alt="14 Street" 
                 />}
                <p className="text-justify">Picture</p>
              </Col>
              <Col sm={4}>
                {<Img 
                  className='image-square'
                  src="/images/portpholio.jpg"
                  alt="14 Street" 
                 /> }
                <p className="text-justify">Picture</p>
              </Col>  
              <Col sm={4}>
                {<Img 
                  className='image-square'
                  src="/images/stop.jpg"
                  alt="14 Street" 
                 />}
                <p className="text-justify">Picture</p>
              </Col>
             
            </Row>
            <h2 className="text-left">Trending Now</h2>
            <Row>
            <Col sm={4}>
            {
            <Img  
              className="img-square" 
              src="/images/003.JPG" 
              alt="Saraine and me" 
              />
           }
            <p className="text-justify">Picture</p>
            </Col>
          <Col sm={4}>
            { <Img 
              className='image-square'
              src="/images/bw.jpg"
              alt="14 Street" 
             /> }
            <p className="text-justify">Picture</p>
            </Col>
          <Col sm={4}>
            {<Img 
              className='image-square'
              src="/images/contact.jpg"
              alt="14 Street" 
             /> }
            <p className="text-justify">Picture</p>
          </Col>
        </Row>
        <Row>
          <Col sm={4}>
            {<Img 
              className='image-square'
              src="/images/gallery.jpg"
              alt="14 Street" 
             /> }
            <p className="text-justify">Picture</p>
            </Col>
          <Col sm={4}>
            {<Img 
              className='image-square'
              src="/images/index.jpg"
              alt="14 Street" 
             /> }
            <p className="text-justify">Picture</p>
            </Col>
            <Col sm={4}>
            {<Img 
              className='image-square'
              src="/images/portpholio.jpg"
              alt="14 Street" 
             /> }
            <p className="text-justify">Picture</p>
          </Col>
        </Row>
        <Row>
          <Col sm={4}>
            {<Img 
              className='image-square'
              src="/images/portpholio.jpg"
              alt="14 Street" 
             /> }
            <p className="text-justify">Picture</p>
          </Col>
          <Col sm={4}>
            {<Img 
              className='image-square'
              src="/images/portrait.jpg"
              alt="14 Street" 
             />}
            <p className="text-justify">Picture</p>
          </Col>
          <Col sm={4}>
            {<Img 
              className='image-square'
              src="/images/springbloosom.jpg"
              alt="14 Street" 
             />}
            <p className="text-justify">Picture</p>
          </Col>
        </Row>
        <h2 className="text-left">Most Popular</h2>
        <Row>
          <Col sm={4}>
            {<Img 
              className='image-square'
              src="/images/stillife.jpg"
              alt="14 Street" 
             />}
            <p className="text-justify">Picture</p>
          </Col>
          <Col sm={4}>
            {<Img 
              className='image-square'
              src="/images/portpholio.jpg"
              alt="14 Street" 
             /> }
            <p className="text-justify">Picture</p>
          </Col>  
          <Col sm={4}>
            {<Img 
              className='image-square'
              src="/images/stop.jpg"
              alt="14 Street" 
             />}
            <p className="text-justify">Picture</p>
          </Col>
         
            </Row>
            <h2 className="text-left">Most Shared</h2>
            <Row>
            <Col sm={4}>
            {
            <Img  
              className="img-square" 
              src="/images/003.JPG" 
              alt="Saraine and me" 
              />
           }
            <p className="text-justify">Picture</p>
            </Col>
          <Col sm={4}>
            { <Img 
              className='image-square'
              src="/images/bw.jpg"
              alt="14 Street" 
             /> }
            <p className="text-justify">Picture</p>
            </Col>
          <Col sm={4}>
            {<Img 
              className='image-square'
              src="/images/contact.jpg"
              alt="14 Street" 
             /> }
            <p className="text-justify">Picture</p>
          </Col>
        </Row>
        <Row>
          <Col sm={4}>
            {<Img 
              className='image-square'
              src="/images/gallery.jpg"
              alt="14 Street" 
             /> }
            <p className="text-justify">Picture</p>
            </Col>
          <Col sm={4}>
            {<Img 
              className='image-square'
              src="/images/index.jpg"
              alt="14 Street" 
             /> }
            <p className="text-justify">Picture</p>
            </Col>
            <Col sm={4}>
            {<Img 
              className='image-square'
              src="/images/portpholio.jpg"
              alt="14 Street" 
             /> }
            <p className="text-justify">Picture</p>
          </Col>
        </Row>
        <Row>
          <Col sm={4}>
            {<Img 
              className='image-square'
              src="/images/portpholio.jpg"
              alt="14 Street" 
             /> }
            <p className="text-justify">Picture</p>
          </Col>
          <Col sm={4}>
            {<Img 
              className='image-square'
              src="/images/portrait.jpg"
              alt="14 Street" 
             />}
            <p className="text-justify">Picture</p>
          </Col>
          <Col sm={4}>
            {<Img 
              className='image-square'
              src="/images/springbloosom.jpg"
              alt="14 Street" 
             />}
            <p className="text-justify">Picture</p>
          </Col>
        </Row>
        <h2 className="text-left">Most Popular</h2>
        <Row>
          <Col sm={4}>
            {<Img 
              className='image-square'
              src="/images/stillife.jpg"
              alt="14 Street" 
             />}
            <p className="text-justify">Picture</p>
          </Col>
          <Col sm={4}>
            {<Img 
              className='image-square'
              src="/images/portpholio.jpg"
              alt="14 Street" 
             /> }
            <p className="text-justify">Picture</p>
          </Col>  
          <Col sm={4}>
            {<Img 
              className='image-square'
              src="/images/stop.jpg"
              alt="14 Street" 
             />}
            <p className="text-justify">Picture</p>
          </Col>
         
              </Row>
          </Grid>
          
       
        </div>
      </div>
    );
  }
  /*3 step sign up process goes somewhere down here.
      1. Sign Up
      2. Cutomize Profile
      3. Connect
      Two buttons one says Join Now the other says Explore.
      */
}
export default Home;

