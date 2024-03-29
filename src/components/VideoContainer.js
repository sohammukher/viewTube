import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import Shimmer from './Shimmer';
const YOUTUBE_TITLE_API = "https://www.googleapis.com/youtube/v3/videos?part=snippet&id={YOUTUBE_VIDEO_ID}&fields=items(id%2Csnippet)&key="

const VideoContainer = () => {

    const [videos, setVideos] = useState([]);

    useEffect(()=>{

        console.log("Inside UseEffect")

        getVidoes();


    },[]);

    const getVidoes= async() =>{
        const data = await fetch(YOUTUBE_VIDEOS_API);

        const json = await data.json();

        console.log(json);

        setVideos(json.items);


    }
    console.log("PROPS ", videos.length)
    if(videos.length===0){
  
      
      return <Shimmer/>
    }
  return (
    <div className=' flex flex-wrap'>
    
        {videos.map((curr)=>(
        <Link to={"/watch?v="+ curr.id}>
        <VideoCard key={curr.id} info={curr}/>
        </Link>
        ))}

        {/* {<VideoCard info={videos[0]}/>} */}
        
    </div>
  )
}

export default VideoContainer