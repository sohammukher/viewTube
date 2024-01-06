import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useParams, useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';
import { addMessages } from '../utils/chatSlice';

const WatchPage = () => {

    // State Variable to Store Message Text:
    const [messageTxt, setMessageText] = useState('');


    // Hide Menu when You Open
    const dispatch = useDispatch();
    dispatch(closeMenu());


    // getting the videoID from http://localhost:3000/watch?v=aSZt3WC1vB4
    const [searchParams] = useSearchParams();
    console.log(searchParams.get("v"))
 
  return (<div className='flex flex-col w-full'>
 
    <div className='px-5 flex w-full'>
    <iframe width="1200" height="600" src={"https://www.youtube.com/embed/"+searchParams.get("v")} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    
    <div>
    <div className=' font-bold p-2 pl-5 text-center  text-xl'>Live Chat</div>    
    <LiveChat/>
    <form className='grid grid-flow-col ' onSubmit={(e)=>{e.preventDefault(); dispatch(addMessages({
        name:"Soham Mukherjee", message:messageTxt
    }))}}>
    <input  className="p-4 m-2 grid-cols-8" type='text' value={messageTxt}  onChange={(e)=>{setMessageText(e.target.value)}} placeholder='What are your views?'/>
    <button className=' bg-slate-200 rounded-lg grid-cols-4 p-1 h-5/6 mt-2'>Send</button>
    </form>
    </div>

    </div>
    
    <CommentsContainer/>
    </div>
  )
}

export default WatchPage