import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessages } from '../utils/chatSlice'

// const chatMessages = [
//     {name:"Soham",
//     message:"Good Video"},

// ]

// Polling Logic

var nameList = [
    'Time', 'Past', 'Future', 'Dev',
    'Fly', 'Flying', 'Soar', 'Soaring', 'Power', 'Falling',
    'Fall', 'Jump', 'Cliff', 'Mountain', 'Rend', 'Red', 'Blue',
    'Green', 'Yellow', 'Gold', 'Demon', 'Demonic', 'Panda', 'Cat',
    'Kitty', 'Kitten', 'Zero', 'Memory', 'Trooper', 'XX', 'Bandit',
    'Fear', 'Light', 'Glow', 'Tread', 'Deep', 'Deeper', 'Deepest',
    'Mine', 'Your', 'Worst', 'Enemy', 'Hostile', 'Force', 'Video',
    'Game', 'Donkey', 'Mule', 'Colt', 'Cult', 'Cultist', 'Magnum',
    'Gun', 'Assault', 'Recon', 'Trap', 'Trapper', 'Redeem', 'Code',
    'Script', 'Writer', 'Near', 'Close', 'Open', 'Cube', 'Circle',
    'Geo', 'Genome', 'Germ', 'Spaz', 'Shot', 'Echo', 'Beta', 'Alpha',
    'Gamma', 'Omega', 'Seal', 'Squid', 'Money', 'Cash', 'Lord', 'King',
    'Duke', 'Rest', 'Fire', 'Flame', 'Morrow', 'Break', 'Breaker', 'Numb',
    'Ice', 'Cold', 'Rotten', 'Sick', 'Sickly', 'Janitor', 'Camel', 'Rooster',
    'Sand', 'Desert', 'Dessert', 'Hurdle', 'Racer', 'Eraser', 'Erase', 'Big',
    'Small', 'Short', 'Tall', 'Sith', 'Bounty', 'Hunter', 'Cracked', 'Broken',
    'Sad', 'Happy', 'Joy', 'Joyful', 'Crimson', 'Destiny', 'Deceit', 'Lies',
    'Lie', 'Honest', 'Destined', 'Bloxxer', 'Hawk', 'Eagle', 'Hawker', 'Walker',
    'Zombie', 'Sarge', 'Capt', 'Captain', 'Punch', 'One', 'Two', 'Uno', 'Slice',
    'Slash', 'Melt', 'Melted', 'Melting', 'Fell', 'Wolf', 'Hound',
    'Legacy', 'Sharp', 'Dead', 'Mew', 'Chuckle', 'Bubba', 'Bubble', 'Sandwich', 'Smasher', 'Extreme', 'Multi', 'Universe', 'Ultimate', 'Death', 'Ready', 'Monkey', 'Elevator', 'Wrench', 'Grease', 'Head', 'Theme', 'Grand', 'Cool', 'Kid', 'Boy', 'Girl', 'Vortex', 'Paradox'
  ];
  function generateName() {
  var finalName = nameList[Math.floor(Math.random() * nameList.length)];

        return finalName;
      };



      const randomVideoComments = [
        "This video is amazing! 👍",
        "Who else is watching in 2024?",
        "I can't stop laughing at this part! 😂",
        "The cinematography is on another level.",
        "I've watched this 10 times already!",
        "This deserves more views.",
        "I wish I could like this more than once.",
        "Who's here after the viral tweet?",
        "This song is stuck in my head now.",
        "Best tutorial ever! Thanks!",
        "I subscribed after just 30 seconds!",
        "Can't believe this is free content.",
        "This video changed my life.",
        "The comment section is wild!",
        "Who else got here from recommendations?",
        "I want more content like this!",
        "I need the background music, it's so good.",
        "This is why the internet exists.",
        "Who's the genius behind this masterpiece?",
        "I'm here early, where's my like?"
      ];
      
      function generateComment(){

        const randomComment = randomVideoComments[Math.floor(Math.random() * randomVideoComments.length)];

        return randomComment;

      }
      // Access a random comment




const LiveChat = () => {

    // Redux Store Access
    const dispatch = useDispatch();
    // Subscribe to the Messages
    const chatMessages = useSelector((store)=>store.chat.messeges)
    console.log("chatMessages",chatMessages)

    useEffect(()=>{

        // In JavaScript, setInterval is a function that 
        // allows you to repeatedly execute a specified function or code block at fixed time intervals. It takes two parameters: the function to be executed and the interval (in milliseconds) at which the function should be called.

        const i = setInterval(()=>{
            // API Polling
            console.log("Polling Function Called")
            dispatch(addMessages({
                name:generateName(),
                message:generateComment()
            }));

        },2000);
    
        // Clear the Interval, Always
        return()=>{
            clearInterval(i);
        }

    
    },[])

  return (
    
    <div className=' bg-slate-100  rounded-lg w-full h-[600px] ml-2 p-2 border-black overflow-y-scroll flex flex-col-reverse'>
        {/* <ChatMessage name={"Soham"} message={"XYZ"}/>
        <ChatMessage name={"Soham"} message={"XYZ"}/>
        <ChatMessage name={"Soham"} message={"XYZ"}/>
        <ChatMessage name={"Soham"} message={"XYZ"}/>
        <ChatMessage name={"Soham"} message={"XYZ"}/>
        <ChatMessage name={"Soham"} message={"XYZ"}/>
        <ChatMessage name={"Soham"} message={"XYZ"}/>
        <ChatMessage name={"Soham"} message={"XYZ"}/>
        <ChatMessage name={"Soham"} message={"XYZ"}/>
        <ChatMessage name={"Soham"} message={"XYZ"}/>
        <ChatMessage name={"Soham"} message={"XYZ"}/> */}

        {chatMessages.map((message,index)=>(<ChatMessage key={index} name={message.name} message={message.message}/>))}
    </div>
  )
}

export default LiveChat