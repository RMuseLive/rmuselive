import React, { Component } from "react";
//import { connect } from "react-redux";
import MyModal from "./Modal";

var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName("typewrite");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-type");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};

class Header extends Component {
  render() {
    return (
      <div className="App-header">
        <header navbar={this.props.header}>
        <navbar modal={this.props.modal}>
          {this.props.children}
        <div className="navbar" />
          <nav className="navbar navbar-inverse">
          <div className="container-fluid">
          <div className="navbar-header">
          <a className="navbar-brand"> Welcome </a>
        </div>
        <ul className="nav navbar-nav">
          <li className="active navMovies">
            <a href="#movies">login</a>
          </li>
          <li className="navSurprise">
            <a href="#surprise">signup</a>
          </li>
          <li className="navSurprise">
            <MyModal />
          </li>
        </ul>
      </div>
        </nav>
        </navbar>
        </header>

            {/* <navbar> */}
         {/* <nav className="nav navbar-light"> */}
          {/* <nav className="Header_links"> */}
          {/* <li className="Header_link">Home</li> */}
          {/* <li className="Header_link">Login</li> */}
          {/* <li className="Header_link">Sign Up</li> */}
          {/* </nav> */}


        {/* </nav> */}
        {/* </navbar> */}
      
      </div>
    

    );
  }
}

export default Header;
