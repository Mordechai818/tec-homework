import React from "react";
import VideoGameCard from "./VideoGamesCard";

class VideoGame extends React.Component{

    state = {
        GameInfo:[{title:"NBA2k" , img:"https://gamefaqs.gamespot.com/a/box/7/1/2/774712_front.jpg"},
                {title:"DIRT" , img:"https://gamefaqs.gamespot.com/a/box/0/7/2/776072_front.jpg"},
                {title:"MORTAL KOMBAT" , img:"https://gamefaqs.gamespot.com/a/box/7/0/7/776707_front.jpg"}
        ]
    }

    // state = {
    //     title:"NBA2k" , img:"https://gamefaqs.gamespot.com/a/box/7/1/2/774712_front.jpg"
    // }

    render(){
        return(<div>
            {this.state.GameInfo.map((item)=>{
                return <VideoGameCard GameObj={item}/>
            })}
            
        </div>)
    }
}

export default VideoGame