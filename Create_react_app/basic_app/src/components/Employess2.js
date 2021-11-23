import React, {Component} from "react";
import Employe2 from "./Employe2";

class Employess2 extends React.Component{

    constructor(props){
      super()  
    }
     

    render(){
        const worker1 = {name: "aaa" , age:"22" , image:"https://cdn.pixabay.com/photo/2015/11/26/00/14/woman-1063100__340.jpg"}
        const worker2 = {name: "bbb" , age:"33" , image:"https://cdn.pixabay.com/photo/2017/08/01/01/33/beanie-2562646__340.jpg" }
        const worker3 = {name: "ccc" , age:"22" ,image:"https://cdn.pixabay.com/photo/2018/03/27/21/43/startup-3267505__340.jpg"}
        const worker4 = {name: "ddd" , age:"33" , image:"https://cdn.pixabay.com/photo/2016/09/03/09/18/girl-1641215__340.jpg"}
        const worker5 = {name: "eee" , age:"55" , image:"https://cdn.pixabay.com/photo/2017/07/31/11/21/people-2557399__340.jpg"}
        const worker6 = {name: "fff" , age:"44" , image:"https://cdn.pixabay.com/photo/2016/09/03/09/18/girl-1641215__340.jpg"}

        return(
          <div className="container">
                <Employe2 employee={worker1} />
                <Employe2 employee={worker2} />
                <Employe2 employee={worker3} />
                <Employe2 employee={worker4} />
                <Employe2 employee={worker5} />
                <Employe2 employee={worker6} />
          </div>
        )
      }
    
}


export default Employess2