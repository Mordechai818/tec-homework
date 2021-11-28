import React, { Component } from 'react'

class NameInput25_11 extends React.Component {
    state = {
        name: "" 
    }

   changeHandler = (e) => {this.setState({name: e.target.value})}

    render() {
        // const changeHandler = (e) => {this.setState({name: e.target.value})}

        return (<div>
            <input type="text" onChange={this.changeHandler} />
            <p> this is: {this.state.name}</p>
        </div>)
    }
}

export default NameInput25_11
