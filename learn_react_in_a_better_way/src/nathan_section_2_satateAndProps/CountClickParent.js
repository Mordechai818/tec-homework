import React, { Component } from 'react'
import CountClickChild from './CountClickChild'

export default class CountClickParent extends Component {

    state={count: 0}

    handlerCounter=()=>{
        this.setState({count: this.state.count+1})
    }

    render() {
        return (
            <div>
                <CountClickChild functionName={this.handlerCounter}/>
                <p>show here:{this.state.count}</p>
            </div>
        )
    }
}
