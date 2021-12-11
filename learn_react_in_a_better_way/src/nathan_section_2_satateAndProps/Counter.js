import React, { Component } from "react"

class Counter extends Component{

    state = {count:0}


    countUp = () =>{
        this.setState({count: this.state.count+1})
    }

    render(){
        return(<div>
            <p onClick={this.countUp}>push here for counter</p>
            <p>{this.state.count}</p>
        </div>)
    }

}

export default Counter