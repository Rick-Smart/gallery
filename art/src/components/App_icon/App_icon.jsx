import React from "react";

function App_icon({iconName, iconSize, iconColor}) {

  return (
    <>
      
      <i class={iconName + " " + iconSize} style={{color: iconColor}} ></i>

    </>
  );
}

export default App_icon;