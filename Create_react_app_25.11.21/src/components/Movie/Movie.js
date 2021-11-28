import React, { Component } from 'react'

class Movie extends Component {





    render() {
        return (
            <div>
                <p>{this.props.Movie}</p>
                <p>{this.props.carObject.price}</p>
                <img src={this.props.carObject.img} alt="" />
            </div>
        )
    }
}

export default Movie