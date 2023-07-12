import {useNavigate } from "react-router-dom";
import { useState} from "react";
import axios from "axios";
import '../landingpages/HeaderSection.css';

// ---Material UI-----

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


// ---Material UI-----



  const AdminChemistPage = () => {

    const [data, setData] = useState([]);
    const getDataId=()=>
     { 
        let record_id = document.getElementById('inpRecordNo').value;
       axios.get(`http://localhost:4000/chemist_registration/${record_id}`)
        .then((getData) => {
          setData(getData.data);
                  })
         document.getElementById("table_head").style.visibility="visible";
          console.log(data)
      }

    const navigate = useNavigate();
      return (
           <>
           <AppBar sx={{p:4}} position="static">
           <Grid container>
           <Grid item xs={12} sm={12} md={6}>
           <Toolbar>
           <Typography variant="h2">Admin</Typography>
           </Toolbar>
           </Grid>
           <Grid item xs={12} sm={12} md={6}>
           <Button onClick={()=>navigate("/login")} 
               sx={{backgroundColor:'white',
               marginLeft:'70%',
               padding:'10px',
               '&:hover':{backgroundColor:'peru'}}}>Log out
          </Button>
          </Grid>
          </Grid> 
          </AppBar>
          <Grid container>
              <Grid item xs={12} sm={12} md={4 }>
              <Card 
              variant="outlined" 
              sx={{'marginTop':'4%',
              'backgroundColor':'lightsteelblue',
              'width':'60%',
              'padding':'1%',
              'color':'indigo',
              'marginLeft':'5px'
              }}
               >
               <CardContent>
                <Box >CHEMIST LIST</Box>
                  </CardContent>
              </Card>
              </Grid>
              <Grid item xs={12} sm={12} md={8}>

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
           sx={{'&:hover':{backgroundColor:'tan'},
           'marginTop':'4%',
           'marginLeft':'1%',
           'padding':'1%',
           'width':'8%'}}
           variant="contained"
           onClick={getDataId}>Submit
           </Button>
          </Hidden>

          </Grid>
        </Grid>
        <Grid container>
              <Grid item xs={12} sm={12} md={12 }>
        <TableContainer sx={{'width':'100%',
        'alignItems':'left',
        'margin':'1%' }}>
        <Table  id="table_head" aria-label="customized table">

          <TableHead >
          
              <TableRow>
                  <TableCell align="right">Id</TableCell>
                 <TableCell align="right">Pharmacy Name</TableCell>
                 <TableCell align="right">Contact Name</TableCell>
                 <TableCell align="right">Email</TableCell>
                 <TableCell align="right">Mobile Number</TableCell>
                 <TableCell align="right">Door No</TableCell>
                 <TableCell align="right">Street</TableCell>
                 <TableCell align="right">Area</TableCell>
                 <TableCell align="right">City</TableCell>
                <TableCell align="right">State </TableCell>
                <TableCell align="right">Pincode</TableCell>
                <TableCell align="right">Chemist Drug Licence No</TableCell>
                <TableCell align="right">Chemist Photo</TableCell> 
             </TableRow>
            
          </TableHead>

          <TableBody>
          {data.map((datas) => (
                  <TableRow >
      
                     <TableCell align="right" key={datas.id}>{datas.chemist_id}</TableCell>  
                     <TableCell align="right"key={datas.id} >{datas.pharmacy_name}</TableCell>
                     <TableCell align="right" key={datas.id}>{datas.contact_name}</TableCell>
                     <TableCell align="right" key={datas.id}>{datas.email_id}</TableCell>
                     <TableCell align="right" key={datas.id}>{datas.mobile_no}</TableCell>
                     <TableCell align="right" key={datas.id}>{datas.door_no}</TableCell>
                     <TableCell align="right" key={datas.id}>{datas.street}</TableCell>
                     <TableCell align="right" key={datas.id}>{datas.area}</TableCell>
                     <TableCell align="right" key={datas.id}>{datas.city}</TableCell>
                     <TableCell align="right" key={datas.id}>{datas.state_name}</TableCell> 
                     <TableCell align="right" key={datas.id}>{datas.pincode}</TableCell> 
                     <TableCell align="right" key={datas.id}>{datas.chemist_drug_licence_no}</TableCell>
                     <TableCell align="right" key={datas.id}>{datas.chemist_photo}</TableCell>
    
                     </TableRow>
                   ))}
           </TableBody>
        </Table>
        </TableContainer> 

     </Grid>
   </Grid>
                </> );
              };
export default AdminChemistPage;