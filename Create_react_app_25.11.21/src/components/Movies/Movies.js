import React, { Component } from "react";

export default class Movies extends Component {
  state = {
    movies: [
      {
        title: "aa",
        year: 2010,
        image:
          "https://cdn.pixabay.com/photo/2017/11/24/10/43/ticket-2974645__480.jpg",
      },
      {
        title: "bb",
        year: 2010,
        image:
          "https://cdn.pixabay.com/photo/2019/11/07/20/48/cinema-4609877__340.jpg",
      },
      {
        title: "cc",
        year: 2020,
        image:
          "https://cdn.pixabay.com/photo/2015/12/09/17/12/popcorn-1085072__340.jpg",
      },
    ],
  };

  render() {
    return (
      <div>
        {this.state.movies.map((item, i) => {
          return (
            <div>
              <img src={item.image} alt="" />
              <p>{item.title}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
