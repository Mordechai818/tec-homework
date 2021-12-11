import React, { Component } from 'react';

class AnotherInputLogger extends Component{

    state={count:""}

    showTyping=(event)=>{
        console.log(event.target.value)
        this.setState({count: event.target.value})
    }


    render(){
        return(<div>
            <input onChange={this.showTyping}/>
            <p>typing:{this.state.count}</p>
        </div>)
    }
}

export default AnotherInputLogger;