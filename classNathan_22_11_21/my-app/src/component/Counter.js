import React from "react";

class Counter extends React.Component{

        state = {count : 0}

        incrementhandler =() => {
            // this.count++;
            this.setState({count : this.state.count + 1})
        }

        decrementhandler =() => {
            // this.count++;
            this.setState({count : this.state.count - 1})
        }

    render(){
        console.log('render0')
        return(<div>
            <button onClick={this.incrementhandler}>Increment</button>
            <button onClick={this.decrementhandler}>Decrement</button>
            <p>count is : {this.state.count}</p>

        </div>)
    }
}


export default Counter
