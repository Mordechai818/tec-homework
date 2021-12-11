import React, { Component } from 'react';
import './App.css';
import Person from './nathan_section_2_satateAndProps/Person'
import AnotherInputLogger from './nathan_section_2_satateAndProps/AnotherInputLogger';
import ChangeName from './nathan_section_2_satateAndProps/ChangeName';
import Counter from './nathan_section_2_satateAndProps/Counter';
import IncrementComponent from './nathan_section_2_satateAndProps/IncrementComponent';
import FunctionInProps from './nathan_section_2_satateAndProps/FunctionInProps';
import CountClickParent from './nathan_section_2_satateAndProps/CountClickParent';
import OutputComponents from './nathan_section_2_satateAndProps/InputOutputASSIGNMENT/OutputComponents';

class App extends Component{


  render(){
    return (<div>
      {/* <Person name="Avi" age="20"/>
      <button onClick={this.clickHandler}>Push</button>
      <AnotherInputLogger/>
      <ChangeName/>
      <Counter/>
      <IncrementComponent intiVal={100}/> */}
      {/* <FunctionInProps/> */}
      {/* <CountClickParent/> */}
      <h2>App Component</h2>
      <OutputComponents/>
    
    </div>)
  }

}

export default App
