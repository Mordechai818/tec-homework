import React from "react";

class ToggleColor extends React.Component{
    state = {textColor: 'red'};
    // clickHandler = () => {
    //     if(this.state.textColor==='red') {
    //         this.setState({textColor: 'green'});

    //     }else {
    //         this.setState({textColor:"red"});
    //     }
    // };
    clickHandler=()=>
    this.setState({
        textColor: this.state.textColor==="red" ? "green" : "red", //alternative way for if() 
    });


    render(){
        const styleRed = {color: this.state.textColor};
        return(
        <h1 onClick={this.clickHandler} style={styleRed}>  {this.props.text}  </h1>);
    }
}

export default ToggleColor