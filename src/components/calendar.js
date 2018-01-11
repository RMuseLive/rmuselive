import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
class App extends Component {
    render() {
      return ( 
          <div>
               
                <Grid><h2 className="text-left">Calendar of Events</h2>
            <Row>
              <Col sm={4}>
              <p className="text-justify">Downtown Mesa Festival of the Arts</p>
                <p className="text-justify">When: Oct 7 - Apr 21</p>
                <p className="text-justify">Where: Mesa AZ</p>
                <p className="text-justify"><a href="https://www.visitarizona.com/events/fairs-and-festivals/downtown-mesa-festival-of-the-arts" className="Details">More Info</a></p>
              </Col>
              <Col sm={4}>
              <p className="text-justify">2ND Annual Chandler International Film Festival</p>
                <p className="text-justify">When: Jan 12 - Jan 15</p>
                <p className="text-justify">Where: Chandler AZ</p>
                <p className="text-justify"><a href="https://www.visitarizona.com/events/fairs-and-festivals/2nd-annual-chandler-international-film-festival">More Info</a></p>
              </Col>
              <Col sm={4}>
              <p className="text-justify">59th Annual Tubac Festival of the Arts</p>
                <p className="text-justify">When: Feb 7 - Feb 11</p>
                <p className="text-justify">Where: Tubac AZ</p>
                <p className="text-justify"><a href="https://www.visitarizona.com/events/fairs-and-festivals/59th-annual-tubac-festival-of-the-arts">More Info</a> </p>
              </Col>
              <Col sm={4}>
              <p className="text-justify">ASU Writer's Craft Conference 2018</p>
                <p className="text-justify">When: Jan 27</p>
                <p className="text-justify">Where: Tempe AZ</p>
                <p className="text-justify"><a href="https://www.eventbrite.com/e/asu-writers-craft-conference-2018-tickets-41156921460">More Info</a></p>
              </Col>
             
            </Row>
            </Grid>
              </div>
      );
    }
  }
  
  export default App;
  