import React from "react";

class CounterTwoHW extends React.Component{
    state = {count1: 0 , count2: 0}

    countingUP = ()=>{
        this.setState({count: this.state.count1 + 1})
    }

    countinDown = ()=>{
        this.setState({count1: this.state.count1 -1})
    }

    countingUP2 = ()=>{
        this.setState({count: this.state.count2 + 1})
    }

    countinDown2 = ()=>{
        this.setState({count: this.state.count2 -1})
    }

    render(){
        console.log('render0')
        return(<div>
            <button onClick={this.countingUP}> {this.props.textUP} </button>
            <button onClick={this.countinDown}>{this.props.textDown}</button>
            <p>{this.state.count1}</p>

            <button onClick={this.countinDown2}> {this.props.textUP2} </button>
            <button onClick={this.countingUP2}> {this.props.textDown2}</button>
            <p>{this.state.count2}</p>


        </div>)
    }
}

export default CounterTwoHW