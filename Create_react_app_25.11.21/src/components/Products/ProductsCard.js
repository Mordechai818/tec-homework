import React, { Component } from 'react'

export default class ProductsCard extends Component {

    render() {
        const product=this.props.propsKey

        return (
            <div>
               <h1>{this.props.propsKey.title}</h1> 
               <img src={this.props.propsKey.img} alt="" />
            </div>
        )
    }
}
