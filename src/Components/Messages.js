import React, { Component } from 'react'

 class Messages extends Component {
    constructor (){
        super()
        this.state={
            Messages: 'hello topit' 
        }
        
    }
  render() {
    return (
        <h2> { this.state.Messages}</h2>
      
    )
  }
  
}
export default Messages
