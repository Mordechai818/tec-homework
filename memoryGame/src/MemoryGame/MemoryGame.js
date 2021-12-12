import React, { Component } from 'react'
import Cards from './Cards'

class MemoryGame extends Component{

    cardsStack  = [1,1,2,2,3,3]


    // Math.floor(Math.random() * 10)

    render(){
        return(<div>
            {
                this.cardsStack.map((card, index) => {return <Cards number={card} />})
            }
        </div>)
    }
}

export default MemoryGame