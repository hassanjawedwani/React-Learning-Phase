import { Component } from "react";
import React from "react";
import {CommonContext} from "./Components/CommonContext";

class Main extends Component {
  render() {
    return (
      <CommonContext.Consumer>
        {
            ({color}) => (
                <h1 style={{backgroundColor: color}}>Hello Main Component</h1>
            )
        }
      </CommonContext.Consumer>
    );
  }
}

export default Main;