import React, { Component } from 'react'

export default class FunctionInPropsCHILD extends Component {


    render() {
        return (
            <div>
                <button onClick={this.props.functionName}>PUSH</button>
            </div>
        )
    }
}
