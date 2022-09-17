import React from 'react'
import './AddStory.css'
import {Modal,Box,Button} from '@mui/material';
import { useState } from 'react';
import { Avatar , Input} from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function AddStory({ profileSrc,setRenderReel}) {
  
  const [file, setFile] = useState("");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
          submit();
        }
      }
    ).catch(_ => console.log("jhamela"))
  }
  const submit = () => {
    handleClose();
    console.log("photo has been sent");
    const data = new FormData();
    data.append('image', file);
    console.log(data);
    fetch("http://localhost:8080/story/post/image", {
      method: "POST",
      body: data
     }).then(response => response.json()).then(
      obj =>{
      console.log(obj);
      setRenderReel(prev => !prev);
    });
  }

    
   
  return (
    <div className='addstory' style={{backgroundImage:`url(${profileSrc})`}}>
        
        <Button onClick={handleOpen} className="addbutton" >Add Story</Button>

             <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
  <input
            type='file'
           // className='messageSender__fileSelector'
            placeholder='Add Story'
            onChange={ event => {
                setFile(event.target.files[0]);  
                //submit();
                
              }
            }
            />
                    <Button onClick={verifyUser}>Submit</Button>
  
  </Box>
</Modal>
     
    </div>
  ) 
}

export default AddStory
