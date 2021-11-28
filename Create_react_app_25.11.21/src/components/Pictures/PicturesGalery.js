import React from "react";
import PicturesThree from "./PicturesThree";

export default class PicturesGalery extends React.Component {
    state={
        threePictures:[
            {img:"https://cdn.pixabay.com/photo/2017/10/09/19/29/eat-2834549__340.jpg"},
            {img:"https://cdn.pixabay.com/photo/2021/10/30/12/50/woman-6754248__340.jpg"},
            {img:"https://cdn.pixabay.com/photo/2017/11/08/22/18/spaghetti-2931846__340.jpg"}
        ]
    }
    render() {
        return (
            <div>
                {this.state.threePictures.map((item)=>{
                   return <PicturesThree galery={item} />

                })}
            </div>
        )
    }
}
