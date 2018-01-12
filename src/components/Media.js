import React, { Component } from "react";

import agent from "../agent";

class Media extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    <div onContextMenu={this.contextMenu}>
      <img src={this.state.uri}/>
    </div>
  }
}