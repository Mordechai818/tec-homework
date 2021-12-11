import React, { Component } from 'react'

export default class IncrementComponent extends Component {

    state={count: this.props.intiVal}

    counter=()=>{
        this.setState({count: this.state.count +4})
    }

    render() {
        return (
            <div>
                <p onClick={this.counter}>push me, i got defualt number from proporties in the components</p>
                <p>{this.state.count}</p>
                
            </div>
        )
    }
}
