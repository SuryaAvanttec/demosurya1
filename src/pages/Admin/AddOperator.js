// ---Material UI-----
import { Select, MenuItem, InputLabel } from "@mui/material";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
// ---Material UI-----

import '../landingpages/HeaderSection.css';
import {useNavigate } from "react-router-dom";
import React, {useState} from "react";
import axios from "axios";

  const AddOperator = () => {

          const handleSubmit = (event) => 
          {
             event.preventDefault();
             alert("Operator Added Successfully");
          }

        const [name,setName] = useState("") 
        const [email,setEmail] = useState("")
        const [mobileNumber,setMobile] = useState("")
        const [pwd,setPwd] = useState("")
        const [status,setStatus] = useState('Active')
        const [user_type,setuser_type] = useState('Operator')

       

        const NameHandler = (e)=>{setName(e.target.value);}
        const EmailHandler = (e)=>{setEmail(e.target.value);}
        const MobileHandler = (e)=>{setMobile(e.target.value);}
        const PwdHandler = (e)=>{setPwd(e.target.value);}
        const StatusHandler = (e)=>{setStatus(e.target.value);}
       
       const navigate = useNavigate();
           const postData = () => {
           Promise.all([
               axios.post(`http://localhost:4000/operationteam_masters`, 
                                {
                                  name,
                                  email,
                                  mobileNumber,
                                  pwd,
                                  status,
                                 
                                }),
                        
             axios.post(`http://localhost:4000/users_masters`, 
                                {
                                  name,
                                  email,
                                  pwd,
                                  user_type
                                })
                              ]).then(axios.spread((data1, data2)=>{
                               navigate('/adminhomeoperatorpg')
                                  }))
                       }

             return (
                   <>
              <form  sx={{width:'80%'}} onSubmit={handleSubmit}>
              <TextField
              onChange={(e)=>{NameHandler(e)}} 
              value={name}
              sx={{marginLeft:'65px',width:'40%','marginTop':'4%'}} 
              required  type="text" id="txtOperName" label="Operator Name" variant="standard"/><br></br>

              <TextField 
              onChange={(e)=>{EmailHandler(e)}}
              value={email}
              sx={{marginLeft:'65px',width:'40%','marginTop':'2%'}} 
              required type="email" id="txtOperEmail" label="Email" variant="standard"/><br></br>
        
  
              <TextField 
              onChange={(e)=>{MobileHandler(e)}}
              value={mobileNumber}
              sx={{marginLeft:'65px',width:'40%','marginTop':'2%'}} 
              required type="text" id="txtOperMobile" label="Mobile Number" pattern="[0-9]{10}" variant="standard"/><br></br>
               

              <TextField 
              onChange={(e)=>{PwdHandler(e)}}
              value={pwd}
              sx={{marginLeft:'65px',width:'40%','marginTop':'2%'}} 
              required type="text" id="txtPwd" label="Password" variant="standard"/><br></br> 

 
                <Button onClick={postData} 
                sx={{'&:hover':{backgroundColor:' darkcyan'},padding:'1%',marginLeft:'65px','marginTop':'4%','width':'260px'}} 
                type="submit" 
                variant="contained">
                Submit
                </Button>&nbsp;
         
                   </form>
                   </>)};
      export default AddOperator;