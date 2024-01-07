import React, { Component } from 'react'


 class ClassClicks extends Component {
    ClickedHandler(){
        document.write(" hello i am shree");
    }
  render() {
    return (
      <div>
        <button onClick={this.ClickedHandler}> Shree Button</button>

        <p> <a href=" www.google.com">sheetal</a></p>
        
      </div>
    )
  }
}
export default ClassClicks
