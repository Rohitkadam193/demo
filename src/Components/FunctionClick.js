import React from 'react'

function FunctionClick() {
    function clickedHandler (){
        document.write(" hello i am sanket");
    }
  return (
    <div>
      <button onClick={clickedHandler}> sanket Button</button>
    </div>
  )
}

export default FunctionClick
