import React from 'react'
import Shimmer from './Shimmer';

const VideoCard = (props) => {


  const {info} = props;

    if(info === undefined) return;


console.log("INSIDE VIDEO CARD",info)


const {snippet, statistics} = info;

const {channelTitle, title, thumbnails} = snippet;

// Higher Order Component
const redBorderVideoCard = (VideoCard) =>{
  return <div className=' p-1 border border-red-600'>
    <VideoCard/>
  </div>
}




  return (
    <div className='p-2 m-2 w-72 shadow-lg rounded-xl'>
        <img className="rounded-lg" src={thumbnails.medium.url} alt="thumbnail"/>
        <ul>
            <li className=' font-bold p-2'>{title}</li>
            <li className='px-2'>{channelTitle}</li>
            <li className='px-2'>{statistics.viewCount} views</li>
            
        </ul>
    </div>
  )
}

export default VideoCard