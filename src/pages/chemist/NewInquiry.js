// ---Material UI-----

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
// ---Material UI-----

import {useNavigate } from "react-router-dom";
import React, {useState,useEffect} from "react";
import axios from "axios";
import LoginPage from '../landingpages/LoginPage';

 const NewInquiry = () => {

          const handleSubmit = (event) => 
          {
             event.preventDefault();
            alert("Inquiry Submitted Successfully");
          }

        const [product_name,setprodName] = useState("") 
        const [product_quantity,setprodQuant] = useState("")
        const [prod_exp_delivery,setprodDatet] = useState("")
        const [prod_photo,setprodPhoto] = useState("")
        

        const prod_name_handler = (e)=>{setprodName(e.target.value);}
        const prod_quantity_handler = (e)=>{setprodQuant(e.target.value);}
        const prod_date_handler = (e)=>{ setprodDatet(e.target.value);}
        const prod_photo_handler = (e)=>{ setprodPhoto(e.target.value);}
        
       const navigate = useNavigate();

        const postData = () => {
                                axios.post(`http://localhost:4000/inquiry_details`, 
                                {
                                  product_name,
                                  product_quantity,
                                  prod_exp_delivery,
                                  prod_photo,
                               
                                }).then(() => {
                                navigate('/chemisthome')
                                })}

           return (
                      <>
            <form  sx={{width:'80%'}} onSubmit={handleSubmit}>

             <TextField
              onChange={(e)=>{prod_name_handler(e)}} 
              value={product_name}
              sx={{marginLeft:'65px',width:'40%','marginTop':'4%'}} 
              required  type="text" id="txtProdName" label="Prodct Name" variant="standard"/><br></br>

              <TextField 
              onChange={(e)=>{prod_quantity_handler(e)}}
              value={product_quantity}
              sx={{marginLeft:'65px',width:'40%','marginTop':'2%'}} 
              required type="text" id="txtProdQuant" label="Product Quantity" variant="standard"/><br></br>
             
          

              <Typography 
                  sx={{marginLeft:'6%',fontSize:'100%','marginTop':'1%','color':'grey'}}>
                    Expected Date
                  </Typography> 
                  <TextField type="date" 
                    sx={{marginLeft:'7%',fontSize:'100%','marginTop':'1%','width':'350px'}} 
                    onChange={(e)=>{prod_date_handler(e)}} value={prod_exp_delivery}>
                  </TextField> <br></br>

                  <Typography 
                  sx={{marginLeft:'6%',fontSize:'100%','marginTop':'1%','color':'grey'}}>
                    Product Pic
                  </Typography> 

                  <TextField 
                 onChange={(e)=>{prod_photo_handler(e)}}
                  value={prod_photo}
                  sx={{'marginLeft':'65px',width:'40%','marginTop':'2%'}} 
                 required type="file" id="fileProdPic" label="" variant="standard"/><br></br>


              
                <Button onClick={postData} 
                sx={{'&:hover':{backgroundColor:' darkcyan'},padding:'1%',marginLeft:'65px','marginTop':'4%','width':'260px'}} 
                type="submit" 
                variant="contained">
                Submit
                </Button>&nbsp;
         
                   </form>
                   </>)};
 export default NewInquiry;