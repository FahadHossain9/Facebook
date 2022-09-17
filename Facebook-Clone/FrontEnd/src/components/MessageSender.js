import { InsertEmoticon, PhotoLibrary, Videocam } from '@mui/icons-material';
import { Avatar , Input} from '@mui/material'
import React, { useRef, useState } from 'react'
import './MessageSender.css'
function MessageSender({setRenderFeed}) {
    const msg = useRef(null);
    // const[input,setInput] = useState('');
    // const[imageUrl,setimageUrl] = useState('');
    const verifyUser=()=>{
      fetch("http://localhost:8080/auth/users/loggedin",{
        method:"POST",
        headers:{
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cookies: localStorage.getItem('token') 
        }),
      }).then(response=>response.json()).then(
        obj => {
          if(!obj){
            alert("You are not verified user");
          }else{
            handleSubmit();
          }
        }
      ).catch(_ => console.log("jhamela"))
    }
    const handleSubmit = ()=>{
        console.log(msg.current.value);
       //will do the fetch/axios things 
       fetch("http://localhost:8080/post/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: "fahad",
          message: msg.current.value,
          date: new Date().toDateString()
        }),
      }).then(response => response.json()).then(
          obj => {
          console.log(obj)
          setRenderFeed(prev => !prev)
        }
      );

    };
    // const handleChange = (e)=>{
    //     console.log(e)
    //     if(e.target.files[0]){
    //         setimageUrl(e.target.files[0])
    //     }
    // }
  return (
    <div className='messagesender'>
       < div className='messagesender__top' >
        <Avatar src=''/>
       
           
            <input 
            ref ={msg} 
            className='messageSender__input' placeholder={`What's on your mind?`} type="text"/>
            {/* <Input
            type='file'
            className='messageSender__fileSelector'
            onChange={handleChange}
            /> */}
            <button onClick={verifyUser}> 
                 
                 Post
            </button>
       
       </div>
       < div className='messagesender__bottom' >
        <div className='messageSender__option'>
            <Videocam style={{color:"red"}}/>
            <h4>Live Video</h4>
        </div>
        <div className='messageSender__option'>
            <PhotoLibrary style={{color:"green"}}/>
            <h4>Photo/Video</h4>
        </div>
        <div className='messageSender__option'>
            <InsertEmoticon style={{color:"orange"}}/>
            <h4>Feeling/Activity</h4>
        </div>
        </div>

    </div>
  )
}

export default MessageSender