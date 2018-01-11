import React, { Component } from "react";
//import { Link } from "react-router-dom";
import  "react-bootstrap";

class FAQ extends Component{
render(){
    return(
       
        <div id="FAQ" className="FAQ">
        <div className="container">
       
          <h2>Frequently Asked Questions</h2>
          <br />
          <div className="col-lg-6 col-md-6">
            <p>
             Q:
             What is RMuse.Live?
             </p>
            <p>
             A: 
             RMuse.Live is a site for all self proclaimed artist, dancers, singers and creators. A place where you can create your own page and share your greatest works. The site also allows you to collaborate with a community of like minded creators.
           </p>
            <p> Q:
             How much is it to sign up?
              </p>
            <p> A:
             It is currently free.
             

            </p>
            </div>
            
          </div>
        </div>
    )}; 
}
export default FAQ;