import React from "react";

class CounterClick extends React.Component{

    //  state = {count: 0}  //***Q-1*** 
     state = {count: this.props.startingPoint}  //***Q-2***

     countdown = ()=>{
        this.setState({count: this.state.count + 1})
     }

    render(){
        return(<div>
            <button onClick={this.countdown}>{this.props.text}</button>
            <p>{this.state.count}</p>

            </div>)
    }
}

export default CounterClick