import { Component } from "react";
import InputComponent from "./InputComponent";

class OutputComponents extends Component{

    state={typing: ""};

    showTyping=(event)=>{
        this.setState({typing: event.target.value})
    }

    render(){
        return(<div>
            <InputComponent  functionName={this.showTyping}/>
            <p>Output Componen: {this.state.typing}</p>
        </div>)
    }
}

export default OutputComponents