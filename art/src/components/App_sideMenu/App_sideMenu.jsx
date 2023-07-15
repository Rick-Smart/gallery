import React from 'react'
import App_itemList from "../App_itemList/App_itemList";

function App_sideMenu({menuDisplay, itemArray}) {

    let displayMode;

    if(menuDisplay){

        displayMode = "block";

    } else{

        displayMode = "none";

    }

  return (
    <div style={{display: displayMode}} >

        <App_itemList itemList={itemArray} />

    </div>
  )
}

export default App_sideMenu