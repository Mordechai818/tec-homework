
import React, { Component } from 'react'
import FunctionInPropsCHILD from './FunctionInPropsCHILD'

export default class FunctionInProps extends Component {

    fatherFunction= ()=>{
        console.log('work fine');
    }

    render() {
        return (
            <div>
                <FunctionInPropsCHILD functionName={this.fatherFunction}/>
            </div>
        )
    }
}

