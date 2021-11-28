import React, { Component } from 'react'
import * as styles from './Car.module.css';


class Car extends Component {





    render() {
        return (
            <div>
                <p>{this.props.carObject.model}</p>
                <p>{this.props.carObject.price}</p>
                <img src={this.props.carObject.img} alt="" />
            </div>
        )
    }
}

export default Car
