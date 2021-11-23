import React from "react";
import "./Employe.css";

// const name = 'david';
// const photo = <img src='https://cdn.pixabay.com/photo/2021/10/05/14/32/ocean-6682870__340.jpg'/>
// {name}
// {photo}

class Employe extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <section className="nameAndAge">
        {this.props.employee.name}<br/>
        {this.props.employee.age}
      </section>
    );
  }
}

export default Employe;
