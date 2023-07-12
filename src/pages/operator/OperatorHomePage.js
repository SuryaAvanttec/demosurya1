import {useNavigate } from "react-router-dom";

// ---Material UI-----
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


// ---Material UI-----

 const OperatorHomePage = () => {

   const navigate = useNavigate();
       return (
         <>
         <AppBar sx={{p:2,'backgroundColor':'steelblue'}} position="static">
               <Grid container>
               <Grid item xs={12} sm={12} md={6}>
                <Toolbar> 
                <Typography variant="h2">Welcome &nbsp; Operator</Typography>
                </Toolbar> 
               </Grid>
               <Grid item xs={12} sm={12} md={6}>
               <Button onClick={()=>navigate("/login")} 
               sx={{backgroundColor:'white',
                marginLeft:'70%',
                padding:'18px',
               'marginTop':'12%',
               '&:hover':{backgroundColor:'cornsilk'}}}>Log out
               </Button>
               </Grid>
               </Grid> 
         </AppBar>
           <Grid container> 
           <Grid item xs={12} sm={12} md={6}>
           <List>

             <ListItem className="operatorHomeList" 
               sx={{'backgroundColor':'gainsboro',
               'textAlign':'center','width':'45%','padding':'3%',
               'color':'dodgerblue','marginLeft':'8px',
               '&:hover':{backgroundColor:'lightsteelblue'}}} 
              onClick={()=>navigate("/registrationreq")}>
                  <ListItemText   primaryTypographyProps={{fontSize: '28px'}} primary ="Registration Requests"/>
             </ListItem>

             <ListItem className="operatorHomeList" 
              sx={{'backgroundColor':'gainsboro',
              'textAlign':'center','fontSize':'20px','width':'45%','padding':'3%',
              'color':'dodgerblue','marginLeft':'8px','marginTop':'5px',
              '&:hover':{backgroundColor:'lightsteelblue'}}} 
              onClick={()=>navigate("/newrequests")}>
                  <ListItemText primaryTypographyProps={{fontSize: '28px'}} primary ="New Requests"/>
             </ListItem>

              <ListItem className="operatorHomeList" 
              sx={{'backgroundColor':'gainsboro',
              'textAlign':'center','fontSize':'20px','width':'45%','padding':'3%',
              'color':'dodgerblue','marginLeft':'8px','marginTop':'5px',
              '&:hover':{backgroundColor:'lightsteelblue'}}} 
              onClick={()=>navigate("/productinquiries")}>
                  <ListItemText primaryTypographyProps={{fontSize: '28px'}} primary ="Inquiries"/>
             </ListItem>
             
          </List>
         </Grid>
         <Grid item xs={12} sm={12} md={6}>
         </Grid>
      </Grid>
      </>)};
export default OperatorHomePage;