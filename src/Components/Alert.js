import React from "react";

export default function Alert(props) {
  return (
    <div style={{height:'1rem'}}>   
       {props.Alert&& <div class={`alert alert-${props.Alert.type}`} role="alert">
        {props.Alert.msg}
      </div>
  }
      </div>

  );
}
