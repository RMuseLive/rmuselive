import React, { Component } from "react";
//import ReactDOM from "react-dom";
import "react-bootstrap";

class Contact extends Component {
  render() {
    return (
      <div className="Contact">
     <a href="/" className="text-justify">Back to Home</a>
        <h5 className="title mb-4 font-bold">WHO WE ARE</h5>
        <p>
          This is our contact page. Here you can contact a member of the team.
        </p>
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
        
      </div>
    );
  }
}
export default Contact;
