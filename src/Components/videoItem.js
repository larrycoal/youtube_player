import React from 'react'
import './videoItem.css'

const videoItem = ({video , onSelectedVideo}) => {
    return (
        <div onClick={()=>{onSelectedVideo(video)}} className="video-item ui item">
            <img className="ui image" src={video.snippet.thumbnails.medium.url} alt={video.snippet.description} />
            <div className="content">
            <h4 className="header">{video.snippet.title}</h4>
            </div>
        </div>
    )
}

export default videoItem