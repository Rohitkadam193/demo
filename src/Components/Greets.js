import React from 'react'
 const Greets = props=> {
    console.log(props)
    return <div>
        <h2>hello  {props.name} and this is {props.helloname}</h2>
        {props.children}
    </div>

 }


export default Greets
