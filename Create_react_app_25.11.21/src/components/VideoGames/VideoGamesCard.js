import React from "react"

class VideoGameCard extends React.Component{

    render(){
        return(<div>
            <img src={this.props.GameObj.img} alt=""/>
            <p>{this.props.GameObj.title}</p>

        </div>)
    }
}

export default VideoGameCard;