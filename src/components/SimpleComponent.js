// Code SimpleComponent Here
import React, { Component } from 'react'
 
class SimplerComponent extends Component {
  constructor(props) {
    super()
    this.state = {
      mood: "happy"
    }
  }

  toggle = () => {
    switch(this.state.mood){
      case "happy":
        this.setState({
          mood: "sad",
        })
        break;
      case "sad":
        this.setState({
          mood: "happy"
        })
        break;
    }
  }

  render() {
  return <div onClick={this.toggle}>{this.state.mood}</div>
  }
}
 
export default SimplerComponent