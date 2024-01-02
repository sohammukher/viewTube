import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';

const Head = () => {

    const dispatch = useDispatch();


    const toggleMenuHandler=() =>{

        console.log("Inside toggleMenuHandler")
        dispatch(toggleMenu());

    }

  return (
    <div className=' grid grid-flow-col p-5 m-2 shadow-lg'>
        <div className='flex col-span-1'> 
        <img  className="h-8 cursor-pointer" alt="menu" onClick={toggleMenuHandler} src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"/>
        <a href='/'>
        <img className="h-8 ml-2" alt="LOGO" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/YouTube_social_white_square_%282017%29.svg/2048px-YouTube_social_white_square_%282017%29.svg.png"/>
        </a>
        </div>
        <div className=' col-span-10 px-10'>
            <input type='text' className='w-1/2 h-10 border border-gray-500 rounded-l-full' placeholder='    What do you want to watch today?'/>
            <button className='border  border-gray-400 py-2  px-5 rounded-r-full bg-gray-100  w-16'>🔍</button>
        </div>
        <div className=' col-span-1'>
            <img  className="h-8" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="userIcon" />
        </div>
    </div>
  )
}

export default Head