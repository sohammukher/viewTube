import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className=' flex items-center shadow-lg p-2 rounded-lg'>
        <img  className="h-12 w-12" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="user_img"/>
        <span className='flex'>
            <p className=' font-bold px-2'>{name} </p>
            <p>{message}</p>
        </span>
    </div>
  )
}

export default ChatMessage