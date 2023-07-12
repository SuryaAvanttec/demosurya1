
// ---Material UI-----

import { Select, MenuItem, InputLabel } from "@mui/material";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
// ---Material UI ends-----

import '../landingpages/HeaderSection.css';
import Pharmacist_image from '../landingpages/images/Medicines4.jpg';

import { useNavigate } from "react-router-dom";
import React, {useState} from "react";
import axios from "axios";

// City & state Import
 import {cities} from './Cities';
 import {states} from './States';

  function ChemistSignup(){

    const handleSubmit = (event) => {
      event.preventDefault();
      alert("Thank You for registering with ASTITVA ");
                }


  //  Variable declaration 

     const [pharmacy_name, setpharmacyname] = useState("")
     const [contact_name, setcontact_name] = useState("")
     const [email_id, setemail_id] = useState("")
     const [mobile_no, setmobile_no] = useState("")
     const [door_no, setdoor_no] = useState("")
     const [street, setstreet] = useState("")
     const [area, setarea] = useState("")
     const [city, setcity] = useState("")
     const [state_name, setstate_name] = useState("")
     const [pincode, setpincode] = useState("")
     const [chemist_drug_licence_no, setchemist_drug_licence_no] = useState("")
     const [chemist_photo, setchemist_photo] = useState("")

  //  Handling Function 
    const pharmacyHandler = (e)=>{setpharmacyname(e.target.value);}
    const contactHandler = (e)=>{ setcontact_name(e.target.value);}
    const emailHandler = (e)=>{setemail_id(e.target.value);}
    const mobileHandler = (e)=>{setmobile_no(e.target.value);}
    const doorHandler = (e)=>{setdoor_no(e.target.value);}
    const streetHandler = (e)=>{setstreet(e.target.value);}    
    const areaHandler = (e)=>{setarea(e.target.value);}           
    const cityHandler = (e)=>{setcity(e.target.value);}           
    const stateHandler = (e)=>{setstate_name(e.target.value);} 
    const pincodeHandler = (e)=>{setpincode(e.target.value);}  
    const licenceHandler = (e)=>{setchemist_drug_licence_no(e.target.value);}  
    const photoHandler = (e)=>{setchemist_photo(e.target.value);} 
                
    const navigate = useNavigate();

    const postData = () => {
      axios.post(`http://localhost:4000/chemist_registration`, 
       {
        pharmacy_name,
        contact_name,
        email_id,
        mobile_no,
        door_no,
        street,
        area,
        city,
        state_name,
        pincode,
        chemist_drug_licence_no,
       chemist_photo
        }).then(() => {
        navigate('/login')
         })}

    return(
      <>
      <Box className="title_sticky" >
      <Typography sx={{fontFamily:'cursive','color':'steelblue'}} variant="h2">ASTITVA</Typography>
      </Box>
   
      <Grid sx={{backgroundColor:'snow'}}container>
        <Grid item xs={12} sm={12} md={5}> 
            <Box 
            component="img"
            sx={{
            margin:'2%',
            height: 600,
            width: 600,
             }}
            alt="Pharmacist_image"
            src={Pharmacist_image}
            />

            <Link href="login" 
             sx={{'marginTop':'10px','color':'royalblue',marginLeft:'55px','&:hover':{'color':' peru '}}}
             className='fs-3 ' underline="always">Already An User?</Link>
             
        </Grid>
        <Grid  item xs={12} sm={6} md={7}> 
          <div className="mt-3"> 
            <form  sx={{width:'80%'}} onSubmit={handleSubmit}>
              
             <TextField onChange={(e)=>{pharmacyHandler(e)}} 
             sx={{marginLeft:'65px',width:'40%','marginTop':'10px'}} required  
             type="text" id="txtPharmaName" label="Pharmacy Name" variant="standard"/><br></br>
             
             <TextField onChange={(e)=>{contactHandler(e)}} sx={{marginLeft:'65px',width:'40%','marginTop':'10px'}}  required type="text" id="txtContactName" label="Contact Name" variant="standard"/><br></br>
             
             <TextField onChange={(e)=>{emailHandler(e)}} sx={{marginLeft:'65px',width:'40%','marginTop':'10px'}} required type="email" id="txtEmail" label="Email ID" variant="standard"/><br></br>
             
             <TextField onChange={(e)=>{mobileHandler(e)}} sx={{marginLeft:'65px',width:'40%','marginTop':'10px'}} required type="text" id="txtMobileNo" label="Mobile Number " variant="standard"/><br></br>
             
             <TextField onChange={(e)=>{doorHandler(e)}} sx={{marginLeft:'65px',width:'40%','marginTop':'10px'}}  required  type="text" id="txtDoorNo" label="Door No" variant="standard"/><br></br>
             
             <TextField onChange={streetHandler} sx={{marginLeft:'65px',width:'40%','marginTop':'10px'}} required type="text" id="txtStreet" label="Street" variant="standard"/><br></br>
             
             <TextField onChange={(e)=>{areaHandler(e)}}  sx={{marginLeft:'65px',width:'40%','marginTop':'10px'}} required type="text" id="txtArea" label="Area" variant="standard"/><br></br>
             
             <InputLabel sx={{marginLeft:'65px',width:'40%','marginTop':'20px'}}>City</InputLabel>
                 <Select sx={{marginLeft:'65px',width:'40%'}} label="State" value={city} onChange={cityHandler}>
                {cities.map((city, index) => {
                  return <MenuItem value={city.name}> 
                  {city.name}
                  </MenuItem>
                    })}
                </Select>
                
            <InputLabel sx={{marginLeft:'65px',width:'40%','marginTop':'20px'}}>State</InputLabel> 
               <Select sx={{marginLeft:'65px',width:'40%'}} label="State" value={state_name} onChange={stateHandler}>
                {states.map((state, index) => {
                return <MenuItem value={state.name}> 
                {state.name}
                </MenuItem>
                    })}
            </Select>
            <br></br>
          
             <TextField onChange={(e)=>{pincodeHandler(e)}} sx={{marginLeft:'65px',width:'40%','marginTop':'10px'}} required  type="text" id="txtPincode" label="Pincode" variant="standard"/><br></br>
             
             <TextField onChange={(e)=>{licenceHandler(e)}} sx={{marginLeft:'65px',width:'40%','marginTop':'10px'}} required  type="text" id="txtDrugLicense" label="Drug License Number" variant="standard"/><br></br>
             
             <TextField onChange={(e)=>{photoHandler(e)}} sx={{marginLeft:'65px',width:'40%','marginTop':'20px'}} required type="file" id="imgChemPhoto" label="Chemist Photo" variant="standard"/>&nbsp;<br></br>
             
             <Button onClick={postData} sx={{'&:hover':{backgroundColor:'tan'},marginBottom:'65px',marginLeft:'65px'}} className="SignUpSubmitBtn mt-5" type="submit" variant="contained">Submit</Button>&nbsp;
             
             <Button sx={{'&:hover':{backgroundColor:'tan'},marginLeft:'25px','marginBottom':'65px'}} className="SignUpCancelBtn ms-3 mt-5" type="reset"  variant="contained">Cancel</Button>
             
             </form>
             
             </div>
             
            
          
          </Grid>
         
      </Grid>
    </>)}
          
      export default ChemistSignup;


  