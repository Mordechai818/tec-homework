import React, {Component} from "react";
import Employe from "./Employe";

class Employess extends React.Component{

    constructor(props){
      super()  
    }
     

    render(){
        const worker1 = {name: "Avrahm" , age:"22" }
        const worker2 = {name: "beny" , age:"33" }
        const worker3 = {name: "gadi" , age:"22" }
        const worker4 = {name: "sara" , age:"33" }
        const worker5 = {name: "natali" , age:"55" }
        const worker6 = {name: "rachel" , age:"44" }

        return(
          <div className="container">
                <Employe employee={worker1} />
                <Employe employee={worker2} />
                <Employe employee={worker3} />
                <Employe employee={worker4} />
                <Employe employee={worker5} />
                <Employe employee={worker6} />
          </div>
        )
      }
    
}


export default Employess