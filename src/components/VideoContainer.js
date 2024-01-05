import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

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