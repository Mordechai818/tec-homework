import React, { Component } from 'react'

export default class Cards extends Component {

    state={showCard: false }

    showCardFun=()=>{
        this.setState({showCard: true});
    }

    render() {
        return (
            <div onClick={this.showCardFun}>
                {this.state.showCard ? this.props.number : '?'}
            </div>
        )
    }
}
