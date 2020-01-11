import React from 'react'
import VideoItem from './videoItem'

const videoList = ({ videos,onSelectedVideo }) => {

    const video=videos.map((video)=>{
        return (
            <VideoItem key={video.id.videoId} video={video} onSelectedVideo={onSelectedVideo}/>
        )
    })
    return (
        <div className="ui relaxed divided list ">
            {video}
        </div>
    )
}

export default videoList