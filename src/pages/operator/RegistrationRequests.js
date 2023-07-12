import {useNavigate } from "react-router-dom";
import { useState} from "react";
import axios from "axios";
import '../landingpages/HeaderSection.css';


// ---Material UI-----
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
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
import { gridColumnsTotalWidthSelector } from "@mui/x-data-grid";


// ---Material UI-----

 const RegistrationRequests = () => {

      function display_reason(){
          document.getElementById("reject_reason").style.visibility="visible";
              }

     const [data, setData] = useState([]);
     const [StatusUpdate,setStatusUpdate] = useState("");
     const [chkBxid, setchkBxid] = useState("");
     const [reason, setreason] = useState("");

     const [Rwid, setRwid] = useState({});
       
     console.log(Rwid);
        
      const rejectReasonHandler = (e)=>{ setreason(e.target.value);}
       console.log(reason)
     
 // Getting records from DB based on ID

    //  function tester(){
    //          var s = document.getElementById('trvalue').rows[0].cells;
    //          console.log("dfgh")
    //          console.log(s)
    //  }


     const handleRowClick = (row) => {
      console.log("Row data:", row.timeStamp);
      
          }


      // console.log(e)
      //   setRwid(parseInt(e.target.type))
           


    const getDataId=()=>
        { 
          let record_id = document.getElementById('inpRecordNo').value;
          axios.get(`http://localhost:4000/chemist_registration/${record_id}`)
          .then((getData) => {
          setData(getData.data);
                  })
        document.getElementById("table_head").style.visibility="visible";
        }
  
// Accepting records based on checkbox value

      const updateAcceptStatus = () => {
        axios.put(`http://localhost:4000/chemist_registration_accept/${chkBxid}`, 
            {
              StatusUpdate
             }).then(() => {
            navigate('/registrationreq')
        })
     //document.getElementById('BtnReject').disabled ="true";
   }

 // Rejecting records based on checkbox value
       const updateRejectStatus = () => {
       
          axios.put(`http://localhost:4000/chemist_registration_reject/${chkBxid}`, 
                   {
                    reason,
                    StatusUpdate
                   }).then(() => {
                   navigate('/registrationreq')
               })}

 const navigate = useNavigate();
      return (
       <>
      <AppBar className="title_sticky"  sx={{p:2,'backgroundColor':'steelblue'}} position="static">
           <Grid  container>
           <Grid item xs={12} sm={12} md={6}>
             
              <Typography sx={{marginTop:'40px'}} variant="h3">Registeration Requests</Typography>
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
              <Grid item xs={12} sm={12} md={3}>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>

              <TextField 
              sx={{'marginLeft':'4%',
             'marginTop':'4%',
             'width':'60%'}} 
             id="inpRecordNo"
              type="text" 
              placeholder='Enter Id here..' 
              variant="outlined"/>
             <Hidden >
              
          <Button 
           sx={{'&:hover':{backgroundColor:'gainsboro','color':'blue'},
           'marginTop':'4%',
           'marginLeft':'1%',
           'padding':'2%',
           'width':'14%'}}
           variant="contained"
           onClick={getDataId}>Select
           </Button>
          </Hidden>
          </Grid>
        </Grid> 
        <Grid container>
              <Grid item xs={12} sm={12} md={12 }>
        <TableContainer sx={{'width':'98%',
        'alignItems':'left',
        'margin':'1%'}}>
        <Table  id="table_head" aria-label="customized table">

          <TableHead>
              <TableRow sx={{color:'steelblue'}} className="tableHeaderDesign">
                  <TableCell sx={{color:'steelblue'}} className="tableHeaderDesign"></TableCell>
                  <TableCell  sx={{color:'steelblue'}} className="tableHeaderDesign" >ID</TableCell>
                  <TableCell sx={{color:'steelblue'}} className="tableHeaderDesign">Pharmacy Name</TableCell>
                  <TableCell sx={{color:'steelblue'}} className="tableHeaderDesign">Contact Name</TableCell>
                  <TableCell sx={{color:'steelblue'}} className="tableHeaderDesign">Email</TableCell> 
                  <TableCell sx={{color:'steelblue'}} className="tableHeaderDesign">Mobile Number</TableCell>
                  <TableCell sx={{color:'steelblue'}} className="tableHeaderDesign">Door No</TableCell>
                  <TableCell sx={{color:'steelblue'}} className="tableHeaderDesign">Street</TableCell>
                  <TableCell sx={{color:'steelblue'}} className="tableHeaderDesign">Area</TableCell>
                  <TableCell sx={{color:'steelblue'}} className="tableHeaderDesign">City</TableCell>
                  <TableCell sx={{color:'steelblue'}} className="tableHeaderDesign">State </TableCell>
                  <TableCell sx={{color:'steelblue'}} className="tableHeaderDesign">Pincode</TableCell>
                  <TableCell sx={{color:'steelblue'}} className="tableHeaderDesign">Chemist Drug Licence No</TableCell>
                  <TableCell sx={{color:'steelblue'}} className="tableHeaderDesign">Chemist Photo</TableCell>
                  <TableCell sx={{color:'steelblue'}} className="tableHeaderDesign">Status</TableCell> 
                  <TableCell sx={{color:'steelblue'}} className="tableHeaderDesign">Reject Reason</TableCell>  
                  <TableCell sx={{color:'steelblue'}} className="tableHeaderDesign">Requested Submitted On</TableCell>  
              </TableRow>
            </TableHead>

            <TableBody>
             {data.map((datas) => (
              <TableRow  
              onClick={(row) => handleRowClick(row)}
              id="trvalue"
              //  onClick={tester} 
               value="helloo"
               
                 >
               
                  <TableCell  className="tableDataDesign" key={datas.id}>
                      <input type='checkbox' id="chkBxId" value={datas.chemist_id} 
                       onClick={e =>setchkBxid(e.target.value)}/>  
                  </TableCell>   
                  <TableCell className="tableDataDesign" key={datas.id}>{datas.chemist_id}</TableCell>  
                  <TableCell className="tableDataDesign" key={datas.id} >{datas.pharmacy_name}</TableCell>
                  <TableCell className="tableDataDesign" key={datas.id}>{datas.contact_name}</TableCell>
                  <TableCell className="tableDataDesign" key={datas.id}>{datas.email_id}</TableCell> 
                  <TableCell className="tableDataDesign" key={datas.id}>{datas.mobile_no}</TableCell>
                  <TableCell className="tableDataDesign" key={datas.id}>{datas.door_no}</TableCell>
                  <TableCell className="tableDataDesign" key={datas.id}>{datas.street}</TableCell>
                  <TableCell className="tableDataDesign" key={datas.id}>{datas.area}</TableCell>
                  <TableCell className="tableDataDesign" key={datas.id}>{datas.city}</TableCell> 
                  <TableCell className="tableDataDesign" key={datas.id}>{datas.state_name}</TableCell> 
                  <TableCell className="tableDataDesign" key={datas.id}>{datas.pincode}</TableCell>  
                  <TableCell className="tableDataDesign" key={datas.id}>{datas.chemist_drug_licence_no}</TableCell>
                  <TableCell className="tableDataDesign" key={datas.id}>{datas.chemist_photo}</TableCell>
                  <TableCell className="tableDataDesign" key={datas.id}>{datas.status}</TableCell>  
                  <TableCell className="tableDataDesign" key={datas.id}>{datas.reason}</TableCell>
                   <TableCell className="tableDataDesign" key={datas.id}>
                     <Moment format="DD/MM/YYYY">{datas.added_date}</Moment> 
                  </TableCell> 

              </TableRow>
                   ))}
             </TableBody>
        </Table>
        </TableContainer>
       <TextField type="text" 
                    id="inpTxtRej"
                    sx={{marginLeft:'35%',fontSize:'100%','marginTop':'1%','width':'350px'}} 
                    onChange={rejectReasonHandler}
                    value={reason}> </TextField>
         <Button value="Approved" 
                      id="BtnApprove" 
                       onClick={updateAcceptStatus} 
                      sx={{'marginTop':'20px','color':'green','border':'1px solid gray','marginLeft':'40%',
                      '&:hover':{backgroundColor:'lightsteelblue'}}}>
                      Approve
          </Button>
         <Button value="Reject" 
                       id="BtnReject" 
                      onClick={updateRejectStatus} 
                      sx={{'marginTop':'20px',color:'red','border':'1px solid gray','marginLeft':'1%',
                      '&:hover':{backgroundColor:'lightsteelblue'}}}>
            Reject
        </Button>  
      </Grid>
     </Grid>
                </> );
              };
export default RegistrationRequests;