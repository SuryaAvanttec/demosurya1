import {useNavigate } from "react-router-dom";
import { useState} from "react";
import axios from "axios";

import '../landingpages/HeaderSection.css';
// ---Material UI-----


import Moment from 'react-moment';
import 'moment-timezone';
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

// ---Material UI-----

 const ViewOperator = () => {
  const [data, setData] = useState([]);

  const getData2=()=>
     { 
      let record_id = document.getElementById('inpRecordNo').value;
       axios.get(`http://localhost:4000/operationteam_masters/${record_id}`)
        .then((getData) => {
          setData(getData.data);
                  })
         document.getElementById("table_head").style.visibility= "visible";
          }
         return (
              <>
            <Grid container>
            <Grid item xs={12} sm={12} md={9}>

              <TextField 
           sx={{'marginLeft':'4%',
           'marginTop':'4%',
           'width':'45%'}} 
           id="inpRecordNo"
           type="text" 
           placeholder='Enter Operator Id here..' 
           variant="outlined"/>

            <Hidden >
            <Button 
           sx={{'&:hover':{backgroundColor:'tan'},
           'marginTop':'4%',
           'marginLeft':'1%',
           'padding':'2%',
           'width':'18%'}}
           variant="contained"
          onClick={getData2}
           >
            Submit
            </Button>
            </Hidden>
         <br/> <br/> <br/>
         <TableContainer sx={{'width':'100%',
             'alignItems':'left',
               'margin':'1%' }}>

          <Table  id="table_head" aria-label="customized table">

          <TableHead >
               <TableRow>
                  <TableCell sx={{color:'blue'}}  className="tableDataDesign">Id</TableCell>
                 <TableCell sx={{color:'blue'}}  className="tableDataDesign"> Name</TableCell>
                 <TableCell sx={{color:'blue'}}  className="tableDataDesign"> Email</TableCell>
                 <TableCell sx={{color:'blue'}} className="tableDataDesign"> Mobile</TableCell>
                 <TableCell sx={{color:'blue'}}  className="tableDataDesign"> Password</TableCell>
                 <TableCell sx={{color:'blue'}}  className="tableDataDesign"> Status</TableCell>
                 <TableCell sx={{color:'blue'}}  className="tableDataDesign"> Added on </TableCell>
             </TableRow>
          </TableHead>
          <TableBody>
          {data.map((datas) => (
              <TableRow>
                     <TableCell className="tableDataDesign" key={datas.id}>{datas.id}</TableCell>  
                     <TableCell className="tableDataDesign"key={datas.id}>{datas.operator_name}</TableCell>
                     <TableCell className="tableDataDesign" key={datas.id}>{datas.operator_email}</TableCell>
                     <TableCell className="tableDataDesign" key={datas.id}>{datas.operator_mobile}</TableCell>
                     <TableCell className="tableDataDesign" key={datas.id}>{datas.operator_pwd}</TableCell>
                     <TableCell className="tableDataDesign" key={datas.id}>{datas.operator_status}</TableCell>
                     <TableCell className="tableDataDesign" className="tableDataDesign" key={datas.id}>
                     <Moment format="DD/MM/YYYY">{datas.added_on}</Moment> 
                     </TableCell>
            </TableRow>
                   ))}
           </TableBody>
        </Table>
        </TableContainer> 
       </Grid>
          </Grid>
                </>)}
            
export default ViewOperator;





