import React, { Component } from 'react'
import Person from './Person';

export default class InputLogger  extends Component {

    // changHandler = (e) => {
    //     console.log()
    // }
    state={name:""}

    changHandler = (e) => {
        this.setState({ name: e.target.value });
    }

    render() {נ
        return (
            <div>
                <input onChange={this.changHandler} type="text" />
                 {/* <p>{this.state.name}</p> */}
                 <Person name={this.state.name}/>
            </div>
        )
    }
}

