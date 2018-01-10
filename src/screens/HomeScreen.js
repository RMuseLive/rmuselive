import React, { Component } from 'react';
//import { Link } from "react-router-dom";

import { Grid, Row, Col } from 'react-bootstrap';
import Img from 'react-image';
import '../index.css';

/*Trending title goes at top of page. Different categories of trending artists. Such as Photography, Filmagraphy, Music, vidoes, etc.

columns of three or four.
Next 3 step sign up.
Sign Up - Customize - Connect.
Maybe move the Navbar in landing page or
leave it in the header.
Maybe change the navbar to navigate around the page.*/
    class Home extends Component {
    render() {
    return (
    //Insert columns here.
    <div className="App">
    <div>
    <h1>
    <a href="/calendar">Events</a>
    </h1>
    {/* <h2>
    <a href="/ProfileScreen">Profile</a>
    </h2> */}
    </div>

    <div className="col-mid-4">
    <form className="search">
    <div className="input-group">
    <label htmlFor="ex1" />
    <input
    type="text"
    className="form-control"
    placeholder="Search artist name or art"
    />

    <button className="btn btn-default" type="submit">
    <i className="glyphicon glyphicon-search" />
    </button>
    
    </div>
    </form>
    </div>
    <Grid>
    <h2 className="text-left">What's New</h2>
    <Row className="row-1">
   
    <Col md={4}>
    <img
    src="https://wallpaperbrowse.com/media/images/Dubai-Photos-Images-Oicture-Dubai-Landmarks-800x600.jpg"
    alt="0"
    
    id="abstract"
    className="img-rounded"
    />
    </Col>
    <Col md={4}>
    <img
    src="http://www.madhatterdc.com/wp-content/uploads/2014/06/Ajax_DJ.jpg"
    alt="0"
    id="abstract"
    
    className="img-rounded"
    />
    </Col>
    <Col md={4}>
    <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQunCS-EFtX8J1YSVS_1osMXka5mnNfM94SMSCqptyB68OXQKgd4A"
    alt="0"
    
    id="abstract"
    className="img-rounded"
    />
    </Col>
    </Row>
    <Row className="row-2">
    <Col md={4}>
    <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrHT83tfWCefPtvaCJmuZSGhWh5QeQox7N9Cs_gfrzXi8qcZO5Wg"
    alt="0"
    
    id="abstract"
    className="img-rounded"
    />
    </Col>
    <Col md={4}>
    <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL0Mn-7xSid9r_Ie462yG7vGxajheppssAx_7cev-jd5tZUrR0Hw"
    alt="0"
    
    id="abstract"
    className="img-rounded"
    />
    </Col>
    <Col md={4}>
    <img
    src="http://jazjaz.net/wp-content/uploads/2013/08/And-Light-Fell-On-Her-Face-Through-H1_thumb.jpg"
    alt="0"
    
    id="abstract"
    className="img-rounded"
    />
    </Col>
    </Row>
    <Row className="row-3">
    <Col md={4}>
    <img
    src="http://www.freedigitalphotos.net/images/img/homepage/394230.jpg"
    alt="0"
    
    id="abstract"
    className="img-rounded"
    />
    </Col>
    <Col md={4}>
    <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBoNowCZG_etvl6ppLoiUGI04HOfUZJPTg19t_XAjtSYOf8Pj5"
    alt="1"
    
    id="abstract"
    className="img-rounded"
    />
    </Col>
    <Col md={4}>
    <img
    src="https://s-media-cache-ak0.pinimg.com/originals/cf/ab/f3/cfabf32f6680ebfada53473532ac7d0d.jpg"
    alt="0"
    
    id="abstract"
    className="img-rounded"
    />
    </Col>
    </Row>


    <h2 className="text-left">Most Shared</h2>
    
    <Row className="row-4">
    <Col md={4}>
    <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT2vEKPzYZYxz3Hv7rSOz_Oq90F4kby0rcDgUP_dpDojHn9hvk"
    alt="0"
    
    id="abstract"
    className="img-rounded"
    />
    </Col>
    <Col md={4}>
    <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxvq35IGqMD8nVbSiM-rZLmhGu38y6EfstD8vss86v-JDea98nlQ"
    alt="0"
    
    id="abstract"
    className="img-rounded"
    />
    </Col>
    <Col md={4}>
    <img
    src="https://content.linkedin.com/content/dam/business/talent-solutions/global/en_us/blog/2015/09/misconceptions-recruiters-have.jpg"
    alt="0"

    id="abstract"
    className="img-rounded"
    />
    </Col>
    </Row>

    <Row className="row-5">
    <Col md={4}>
    <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI3wqJW5uUWMD8VlbDJZFP_DzpWdpgumQkoGl5j5tPVX7hZOMrcg"
    alt="0"
    
    id="abstract"
    className="img-rounded"
    />
    </Col>
    <Col md={4}>
    <img
    src="http://images.financialexpress.com/2017/08/2-pti-4.jpg"
    alt="0"
    
    id="abstract"
    className="img-rounded"
    />
    </Col>
    <Col md={4}>
    <img
    src="https://artist.com/art-recognition-and-education/wp-content/themes/artist-blog/media-files/2016/05/abstract-6.jpg"
    alt="0"

    id="abstract"
    className="img-rounded"
    />
    </Col>
    </Row>

   
    
   
    <Row className="row-6">
    <Col md={4}>
    <img
    src="https://s3.amazonaws.com/graffiti.fatcap.com/500/opct_50688836387cbd02256859ad9455b8bc.jpg"
    alt="0"
    id="abstract"
    className="img-rounded"
    />
    </Col>
    <Col md={4}>
    <img
    src="https://coolsandiegosights.files.wordpress.com/2017/07/img_2169z-fan-of-the-comedy-central-show-broad-city-paints-a-wall-during-2017-san-diego-comic-con.jpg?w=660"
    alt="0"
    id="abstract"
    className="img-rounded"
    />
    </Col>

    <Col md={4}>
    <img
    src="http://wallportal.com/uploads/posts/jazz-art-wallpaper/jazz_art_wallpaper_004.jpg"
    alt="0"
    id="abstract"
    className="img-rounded"
    />
    </Col>
    </Row>
    </Grid>
    </div>
    );
    }

    }
    export default Home;

