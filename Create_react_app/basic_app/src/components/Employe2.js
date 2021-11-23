import React from "react";
import "./Employe.css";



class Employe2 extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <section className="nameAndAge">
        <img id="photo" src={this.props.employee.image}/>
        {this.props.employee.name}
        {this.props.employee.age}
      </section>
    );
  }
}

export default Employe2;
