
import { useState} from "react";
import axios from "axios";
import '../landingpages/HeaderSection.css';
import {useNavigate } from "react-router-dom";

// ---Material UI-----
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

 const InquiriesList = () => {

  const [data, setData] = useState([]);

  const getData=()=>
     { 
       let inquiry_id = document.getElementById('inquiryid').value;
         axios.get(`http://localhost:4000/inquiry_details/${inquiry_id}`)
        .then((getData) => {
          setData(getData.data);
                  })
          document.getElementById("table_head").style.visibility= "visible";
      }
      const navigate = useNavigate();
         return (
              <>
               
           <Grid container>
              <Grid item xs={12} sm={12} md={9}>

              <TextField 
             sx={{'marginLeft':'4%',
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
           'padding':'2%',
           'width':'18%'}}
           variant="contained"
           onClick={getData}>Submit
            </Button>
            </Hidden>

         <TableContainer sx={{'width':'100%',
             'alignItems':'left',
               'margin':'1%' }}>

          <Table  id="table_head" aria-label="customized table">

           <TableHead >
             <TableRow>
              <TableCell className="tableDataDesign">Id</TableCell>
              <TableCell className="tableDataDesign">Product Name</TableCell>
              <TableCell className="tableDataDesign">Product Quantity</TableCell>
              <TableCell className="tableDataDesign">Expected Date </TableCell>
              <TableCell className="tableDataDesign">Status</TableCell>
              <TableCell className="tableDataDesign">Action</TableCell>
             </TableRow>
             </TableHead>
              <TableBody>
          {data.map((datas) => (
                  <TableRow >
      
                     <TableCell className="tableDataDesign" key={datas.id}>{datas.id}</TableCell>  
                     <TableCell className="tableDataDesign" key={datas.id} >{datas.product_name}</TableCell>
                     <TableCell className="tableDataDesign" key={datas.id}>{datas.product_quantity}</TableCell>
                     <TableCell className="tableDataDesign" key={datas.id}>
                     <Moment format="DD/MM/YYYY">{datas.prod_exp_delivery}</Moment> 
                      </TableCell>
                     <TableCell className="tableDataDesign" key={datas.id}>{datas.status}</TableCell>
                     <TableCell className="tableDataDesign" key={datas.id}><Button  sx={{backgroundColor:'gainsboro'}}>Place Order</Button></TableCell>
                     </TableRow>
                   ))}
           </TableBody>
        </Table>
        </TableContainer> 

       </Grid>
          </Grid>
                </>)}
            
export default InquiriesList;





