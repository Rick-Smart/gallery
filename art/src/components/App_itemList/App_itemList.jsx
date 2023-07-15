import React from 'react'
import App_button from "../App_button/App_button";
import App_icon from '../App_icon/App_icon';

function App_itemList({itemList}) {

    function itemListSort(sortItem){

        if(sortItem.componentType === "Button"){

            return <App_button key={sortItem.id} buttonType={sortItem.itemAppearance} buttonTitle={sortItem.itemTitle} onButtonSubmit={() => {console.log(sortItem.itemTitle)}} />

        } else if(sortItem.componentType === "Icon") {

            return <App_icon key={sortItem.id} iconName={sortItem.iconDisplay} iconSize={sortItem.sizeOfIcon} iconColor={sortItem.colorOfIcon}/>

        }


    }

    return (
        <>
        
            
            {itemList.map((item)=> itemListSort(item))}
    
        </>
      )

}

export default App_itemList