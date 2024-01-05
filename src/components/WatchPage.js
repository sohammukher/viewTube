import React from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useParams, useSearchParams } from 'react-router-dom';

const WatchPage = () => {
    // Hide Menu when You Open
    const dispatch = useDispatch();
    dispatch(closeMenu());


    // getting the videoID from http://localhost:3000/watch?v=aSZt3WC1vB4
    const [searchParams] = useSearchParams();
    console.log(searchParams.get("v"))

  return (
    <div className='px-5'><iframe width="1200" height="600" src={"https://www.youtube.com/embed/"+searchParams.get("v")} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></div>
  )
}

export default WatchPage