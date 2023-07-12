
import { useState} from "react";
import axios from "axios";
import '../landingpages/HeaderSection.css';
import {useNavigate } from "react-router-dom";
// ---Material UI-----
import {InputLabel } from "@mui/material";

import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Hidden from '@mui/material/Hidden';
import Moment from 'react-moment';
import 'moment-timezone';
// ---Material UI-----

 const ProductInquiries = () => {

  const [data, setData] = useState([]);
  const [chkBxid, setchkBxid] = useState("");
  const [StatusUpdate,setStatusUpdate] = useState("");
  const [reason, setreason] = useState("");

const notAvailableHandler = (e)=>{ setreason(e.target.value);}

  const getData=()=>
     { 
       let inquiry_id = document.getElementById('inquiryid').value;
         axios.get(`http://localhost:4000/inquiry_details/${inquiry_id}`)
        .then((getData) => {
          setData(getData.data);
                  })
          document.getElementById("table_head").style.visibility= "visible";
      }

// Product Available   

const updateAvailablestatus = () => {
   
   axios.put(`http://localhost:4000/inquiry_details_available/${chkBxid}`, 
       {
         StatusUpdate
        }).then(() => {
       navigate('/productinquiries')
   })
   // document.getElementById('BtnReject').disabled ="true";
}

//  Product Not Available    
  const updateNotAvailablestatus = () => {
  
     axios.put(`http://localhost:4000/inquiry_details_notavailable/${chkBxid}`, 
              {
               reason,
               StatusUpdate
              }).then(() => {
              navigate('/productinquiries')
          })}





      const navigate = useNavigate();
         return (
              <>
               <AppBar className="title_sticky"  sx={{p:2,'backgroundColor':'steelblue'}} position="static">
           <Grid  container>
           <Grid item xs={12} sm={12} md={6}>
             
              <Typography sx={{marginTop:'40px'}} variant="h3">Product Inquiries</Typography>
           </Grid>
           <Grid item xs={12} sm={12} md={6}>
           <Typography sx={{marginLeft:'380px'}} variant="h6">Welcome Operator</Typography>
              <Button onClick={()=>navigate("/login")} 
               sx={{backgroundColor:'white',
                    marginLeft:'70%',
                    marginTop:'7%',
                    padding:'10px',
                    '&:hover':{backgroundColor:'gainsboro'}}}>
                      Log out
              </Button>
          </Grid>
          </Grid> 
        </AppBar> 
            <Grid container>
              <Grid item xs={12} sm={12} md={9}>

              <TextField 
           sx={{'marginLeft':'12%',
           'marginTop':'4%',
           'width':'45%'}} 
           id="inquiryid"
           type="text" 
           placeholder='Enter Record Id here..' 
           variant="outlined"/>

            <Hidden >
            <Button 
           sx={{'&:hover':{backgroundColor:'tan'},
           'marginTop':'4%',
           'marginLeft':'1%',
           'padding':'1%',
           'width':'18%'}}
           variant="contained"
           onClick={getData}>Submit
            </Button>
            </Hidden>

         <TableContainer sx={{'width':'100%',
                'marginLeft':'10%',
               'marginTop':'5%',
                }}>

          <Table  id="table_head" aria-label="customized table">

           <TableHead >
             <TableRow >
             <TableCell sx={{fontSize:"20px",'color':'steelblue'}}  className="tableDataDesign"></TableCell>
              <TableCell sx={{fontSize:"20px",'color':'steelblue'}}  className="tableDataDesign">Id</TableCell>
              <TableCell sx={{fontSize:"20px",'color':'steelblue'}}  className="tableDataDesign">Product Name</TableCell>
              <TableCell sx={{fontSize:"20px",'color':'steelblue'}}  className="tableDataDesign">Product Quantity</TableCell>
              <TableCell sx={{fontSize:"20px",'color':'steelblue'}}  className="tableDataDesign">Expected Date  </TableCell>
              <TableCell sx={{fontSize:"20px",'color':'steelblue'}}  className="tableDataDesign">Status</TableCell>
              <TableCell sx={{fontSize:"20px",'color':'steelblue'}}   className="tableDataDesign">Reason</TableCell>
             </TableRow>
             </TableHead>
              <TableBody>
              
           {data.map((datas) => (
                  <TableRow >
                      <TableCell  className="tableDataDesign" key={datas.id}>
                      <input type='checkbox' id="chkBxId" value={datas.id} 
                       onClick={e =>setchkBxid(e.target.value)}/>  
                     </TableCell> 
                     <TableCell className="tableDataDesign" key={datas.id}>{datas.id}</TableCell>  
                     <TableCell className="tableDataDesign" key={datas.id} >{datas.product_name}</TableCell>
                     <TableCell className="tableDataDesign" key={datas.id}>{datas.product_quantity}</TableCell>
                     <TableCell className="tableDataDesign" key={datas.id}>
                      <Moment format="DD/MM/YYYY">{datas.prod_exp_delivery}</Moment> 
                      </TableCell>
                      <TableCell className="tableDataDesign" key={datas.id}>{datas.status}</TableCell>
                      <TableCell className="tableDataDesign" key={datas.id}>{datas.reason}</TableCell>
                     </TableRow>

                   ))}
           </TableBody>
           </Table>
           </TableContainer> 
           <InputLabel sx={{marginLeft:'105px',width:'40%','marginTop':'28px','color':'red'}}>Reason for Non Availability:</InputLabel>  
            <TextField type="text" 
                    id="inpTxtRej"
                    sx={{marginLeft:'28%',fontSize:'100%','width':'350px'}} 
                    onChange={notAvailableHandler}
                    value={reason}>
           </TextField>

           <br></br>
           <Button  onClick={updateAvailablestatus} sx={{width:'200px','marginTop':'20px','marginLeft':'24%','marginBottom':'150px',backgroundColor:'lightgray',color:'green','&:hover':{backgroundColor:'tan'}}}>Available</Button>&nbsp;&nbsp;
           <Button  onClick={updateNotAvailablestatus} sx={{width:'200px','marginTop':'20px',backgroundColor:'lightgray','marginBottom':'150px',color:'red','&:hover':{backgroundColor:'tan'}}}>Not Available</Button>
          </Grid>
           </Grid>
                </>)}
            
export default ProductInquiries;





