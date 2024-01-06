import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import {YOUTUBE_VIDEO_SUGGESTIONS_API} from "../../src/utils/constants"
import store from '../utils/store';
import {cacheResults} from '../utils/searchSlice' // This Curly Braces Around the Import is Very Important.

const Head = () => {

    const dispatch = useDispatch();


    // Subscribe to the Cache:
    const searchCache = useSelector((store)=>store.search);

    // console.log("STORE_CACHE ", searchCache);

    // Seach Debouncing:
    const [searchQuery, setSearchQuery] = useState("")

    // State Variable for Storing the Suggestions
    const [suggestions, setSuggestions] = useState([]);

    const [showSuggestions, setShowSuggestions ] = useState(false);

    // API Call if difference B/w Keystrokes is More than 200ms
    useEffect(()=>{

    console.log(searchQuery);
    // Make an API Call on Every KeyStroke.
    // If the Diff b/w 2 API Calls is Less than "200ms", Decline the API Call

    const timer = setTimeout(()=>{
    // Query in the Cache
    if(searchCache[searchQuery]){ // If Valid Entry Present in the Cache
    //     // setShowSuggestions(storeCache[searchQuery]) // Set the Cache Results as the Output

    console.log("Valid Entry In Cache");
    setShowSuggestions(searchCache[searchQuery])
    }else{
        // Call the API
        
        getSearchSuggestions();

    }
            
    }, 200)


    // Everytime the Component is Rerendered the Old Timer is Cleared
    return() =>{
        clearTimeout(timer);
    }


    },[searchQuery]); // Trigger useEffect Everytime "searchQuery", is changed

    const getSearchSuggestions = async () =>{

        console.log("getSearchSuggestions Called")

        const data = await fetch(YOUTUBE_VIDEO_SUGGESTIONS_API+searchQuery);

        const jsonResponse = await data.json();

        console.log("JSON SUGGESTIONS",jsonResponse[1])

        // Setting the Suggestions in the Suggestions Box
        setSuggestions(jsonResponse[1])


        // Cache the Suggestions:
        dispatch(cacheResults(
            {
                [searchQuery]:jsonResponse[1]
            }));

    };




    const toggleMenuHandler=() =>{

        console.log("Inside toggleMenuHandler")
        dispatch(toggleMenu());

    }



  return (
    <div className=' grid grid-flow-col p-5 m-2 shadow-lg'>
        <div className='flex col-span-1'> 
        <img  className="h-8 cursor-pointer" alt="menu" onClick={toggleMenuHandler} src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"/>
        <a href='/'>
        <img className="h-[26px] w-[90px] ml-2 pt-1 pl-4 mt-0" alt="LOGO" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/YouTube_Premium_logo.svg/1280px-YouTube_Premium_logo.svg.png"/>
        </a>
        </div>
        <div className=' col-span-10 px-10'>
            <input type='text' onFocus={()=>setShowSuggestions(true)}  value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} className='w-1/2 h-10 border border-gray-500 rounded-l-full ' placeholder='    What do you want to watch today?'/>
            <button className='border  border-gray-400 py-2  px-5 rounded-r-full bg-gray-100  w-16'>🔍</button>
        </div>

        {showSuggestions&&(<div className='fixed bg-white my-10  🔍 font-semibold mx-60 w-[37rem] px-2 shadow-lg border border-gray-400  hover:border-gray-100 rounded-lg'>
            <ul onBlur={()=>setShowSuggestions(false)}>
            {suggestions.map((suggestion)=>(
                
                <li className=' cursor-pointer hover:bg-slate-200'  onClick={(e)=>{
                    console.log("Clicked Suggestion", e.target.innerText)
                    setSearchQuery(e.target.innerText)}} 
                    key={suggestion}>{"🔍 "+suggestion}</li>
                ))}

            </ul>
        </div>)}

        <div className=' col-span-1'>
            <img  className="h-8" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="userIcon" />
        </div>
    </div>
  )
}

export default Head