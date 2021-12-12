import React, { Component } from 'react'

export default class AMemoryC extends Component {

    numbersStack=[1,1,2,2,3,3]

    render() {
        return (
            <div>
                {this.numbersStack.map((num,index)=>{<ccc /> })}
            </div>
        )
    }
}
