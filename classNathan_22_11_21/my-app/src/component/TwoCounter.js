import React from "react";

class TwoCounter extends React.Component{

        state = {count : 0 , count2: 0}

        incrementhandler =() => {
            // this.count++;
            this.setState({count : this.state.count + 1})
        }

        decrementhandler =() => {
            // this.count++;
            this.setState({count2 : this.state.count2 - 1})
        }

    render(){
        console.log('render0')
        return(<div>
            <button onClick={this.incrementhandler}>Increment</button>
            <button onClick={this.decrementhandler}>Decrement</button>
            <p>count is : {this.state.count}</p>
            <p>count two is  : {this.state.count2}</p>

        </div>)
    }
}


export default TwoCounter


