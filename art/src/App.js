import { useState, useEffect, useRef } from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import App_tester from "./components/App_tester";
import App_button from "./components/App_button/App_button";
import App_itemList from "./components/App_itemList/App_itemList";
import App_sideMenu from "./components/App_sideMenu/App_sideMenu";
import App_icon from "./components/App_icon/App_icon";

function App() {

  const [menuVisible, setMenuVisible] = useState(false);

  function doSomething(){
    
    setMenuVisible(!menuVisible);
    console.log(menuVisible);
    
  }

  function menuItemClick(){

    

  }


  let buttonListItems = [

    {
        
        id:1,
        buttonType:"dark",
        buttonTitle:"Menu",
        onItemSubmit:doSomething

    }
    

];

let menuListItems = [

  {
      
      id:1,
      itemAppearance:"dark",
      itemTitle:"Menu1",
      componentType:"Button",
      onItemSubmit:menuItemClick

  },
  {
      
      id:2,
      itemAppearance:"dark",
      itemTitle:"Menu2",
      componentType:"Button",
      onItemSubmit:menuItemClick

  },
  {
      
      id:3,
      itemAppearance:"dark",
      itemTitle:"Menu3",
      componentType:"Button",
      onItemSubmit:menuItemClick

  }
  

];

let iconListItems = [

  {

      id:1,
      iconDisplay:"fa fa-car",
      sizeOfIcon:"fa-5x",
      colorOfIcon: "rgb(0, 0, 255)",
      componentType:"Icon"

  },
  {

      id:2,
      iconDisplay:"fa fa-home",
      sizeOfIcon:"fa-3x",
      colorOfIcon: "green",
      componentType:"Icon"

  },
  {

      id:3,
      iconDisplay:'fa fa-apple',
      sizeOfIcon:"fa-4x",
      colorOfIcon: "red",
      componentType:"Icon"

  },
  
  
];

  return (
    <>
      <div className="App">
        
        <App_button buttonTitle={buttonListItems[0].buttonTitle} buttonType={buttonListItems[0].buttonType} onButtonSubmit={buttonListItems[0].onItemSubmit}/>  
        <App_sideMenu menuDisplay={menuVisible} itemArray={menuListItems} />
        <App_itemList itemList={iconListItems}/>

      </div>
    </>
  );
}

export default App;
