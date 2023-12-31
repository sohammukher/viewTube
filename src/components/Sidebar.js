import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {

const isMenuOpen = useSelector(store => store.app.isMenuOpen);

console.log("isMenuOpen", isMenuOpen)

  if(!isMenuOpen) return null; // Early Return

  return (
    <div className='w-48 p-5 shadow-lg'>
<div className=' pb-5'>
<ul>
  <Link to="/">
    <li>Home</li>
  </Link>
    <li>Shorts</li>
    <li>Videos</li>
    <li>Live</li>
    </ul>
</div>
<h1 className=' font-bold'>Subscriptions</h1>
    <ul>
    <li>Music</li>
    <li>Sports</li>
    <li>Gaming</li>
    <li>Movies</li>

    </ul>

    <h1 className=' font-bold pt-5'>Watch Later</h1>
    <ul>
    <li>Music</li>
    <li>Sports</li>
    <li>Gaming</li>
    <li>Movies</li>

    </ul>

    </div>
  )
}

export default Sidebar




