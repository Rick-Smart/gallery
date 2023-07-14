import React from "react";

import { Icon } from "@mui/material";
import * as MUIIcons from "@mui/icons-material";

function App_icon({ iconName, iconColor, iconSize }) {
  return (
    <>
      <div
        className="icon-circle"
        style={{
          backgroundColor: iconColor,
          width: iconSize,
          height: iconSize,
          borderRadius: iconSize / 2,
        }}
      >
        <Icon name={iconName} />
      </div>
    </>
  );
}

export default App_icon;
