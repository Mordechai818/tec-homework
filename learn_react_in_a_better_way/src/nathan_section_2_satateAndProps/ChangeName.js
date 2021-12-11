import React, { Component } from "react";


class ChangeName extends Component{
    state={name1: "Moshe"}

    // name1 = 'Moshe'      // if i choose to put 'moshe' here and the state empty (''), 
     //i wholdnt put "this.state.name1" insted i put "this.name1"

     changeNameHandler=()=>{  
        if(this.state.name1 === 'Moshe'){
        this.setState({name1: 'shalom'})
      } else{
            this.setState({name1: 'Moshe'})
      }}

                                               /// in this versin of the changing name function i added setTime function
// changeNameHandler=()=>{
//   console.log(this.state.name1);
//   setTimeout(()=>{   
//     if(this.state.name1 === 'Moshe'){
//     this.state.name1 = 'shalom';
//     this.setState({name1: this.state.name1})
//   }else{
//         this.state.name1 = 'Moshe';
//         this.setState({name1: this.state.name1})
//   }
//   return console.log(this.state.name1);}, 1000);
// }



    render(){
        return(<div>
            <button onClick={this.changeNameHandler} >click Me change name</button>
            <h2>{this.state.name1}</h2>
        </div>)
    }
}

export default ChangeName