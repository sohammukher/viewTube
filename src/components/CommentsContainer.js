import React from 'react'

const commentsData =[

    {
        name:"Vivek",
        text:"Lorem ipsum fdasdsadasdasd",
        replies:[],
    },
    {
        name:"Sai",
        text:"Lorem ipsum fdasdsadasdasd",
        replies:[]
    },
    {
        name:"Abhishek",
        text:"Lorem ipsum fdasdsadasdasd",
        replies:[]
    },
    {
        name:"Siva",
        text:"Lorem ipsum fdasdsadasdasd",
        replies:[{
            name:"Nishant",
            text:"Lorem ipsum fdasdsadasdasd",
            replies:[{
                name:"Divya",
                text:"Lorem ipsum fdasdsadasdasd",
                replies:[{
                    name:"Rakesh",
                    text:"Lorem ipsum fdasdsadasdasd",
                    replies:[{
                        name:"Nishant",
                        text:"Lorem ipsum fdasdsadasdasd",
                        replies:[]
                    }],
                }],
            }],
        }],
    },


]


const Comment = ({data}) =>{
    const {name,text,replies} = data;

    console.log("Comment "+ name+" "+text)

    return (<div className='flex  shadow-md bg-gray-100 p-2 rounded-lg'>
        <img  className="w-12 h-12 p-3" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="USER PICTURE"/>
        <div>
            <p className=' font-bold'>{name}</p>
            <p>{text}</p>
        </div>
    </div>)
}

// To Create More Comments, We need to Do Reccursion.

// Takes the Comments List From the Object we Created and Renders a Comment Component for each of the Data.
const CommentsList =({comments})=> {

    console.log("CommentsList",comments)

    return comments.map((comment,index)=>(
         <div>
            <Comment key={index} data={comment}/>
            <div className=' pl-5 border border-l-black ml-5'>
            <CommentsList comments={comment.replies} />
            </div>
         </div>
    ));
    
}

const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
        <h1 className='text-2xl font-bold'>Comments:</h1>
        <CommentsList comments={commentsData}/>
    </div>
  )
}

export default CommentsContainer