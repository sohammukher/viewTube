import React from 'react'

const VideoCard = ({info}) => {

    if(info === undefined) return;


console.log("INSIDE VIDEO CARD",info)


const {snippet, statistics} = info;

const {channelTitle, title, thumbnails} = snippet;





  return (
    <div className='p-2 m-2 w-72 shadow-lg'>
        <img className="rounded-lg" src={thumbnails.medium.url} alt="thumbnail"/>
        <ul>
            <li className=' font-bold p-2'>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount} views</li>
            
        </ul>
    </div>
  )
}

export default VideoCard