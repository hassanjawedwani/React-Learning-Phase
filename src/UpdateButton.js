import React from "react";
import {CommonContext} from "./Components/CommonContext";

const UpdateButton = () => {
    return (
      <CommonContext.Consumer >  
        {
            ({updateColor}) => (
                <button onClick={updateColor}>Update color</button>
            )
        }
      </CommonContext.Consumer>
    );
}

export default UpdateButton;