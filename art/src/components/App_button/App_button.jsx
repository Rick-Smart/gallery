import React from 'react'

function App_button({buttonTitle, buttonType, onButtonSubmit}) {

  //console.log(otherProps);

    function notDoingAnything(){

        console.log("I have no purpose :(");

    }

  return (
    <> 
        <button type="button" className={buttonType? "btn " + "btn-" + buttonType:"secondary"} onClick={onButtonSubmit? onButtonSubmit:notDoingAnything} >{buttonTitle? buttonTitle:"noTitlePassed"}</button>
    </>
  )
}

export default App_button