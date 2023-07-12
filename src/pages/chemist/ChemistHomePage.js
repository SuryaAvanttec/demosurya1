import {useNavigate } from "react-router-dom";
import {NavLink, Outlet } from "react-router-dom";
// ---Material UI-----


import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';

// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';


// ---Material UI-----

 const ChemistHomePage = () => {

   const navigate = useNavigate();
       return (
         <>
         <AppBar sx={{p:2,'backgroundColor':'steelblue','color':'lightgray','textAlign':'center'}} position="static">
               <Grid container>
               <Grid item xs={12} sm={12} md={6}>
                <Toolbar> 
                <Typography variant="h2">Welcome &nbsp; Chemist </Typography>
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
           <Grid item xs={12} sm={12} md={3}>
             
           <Box 
               sx={{'backgroundColor':'gainsboro',
               'textAlign':'center',
               'width':'90%',
               'padding':'6%',
               'marginLeft':'5px',
               'marginTop':'10px',
               'fontSize':'28px',
               '&:hover':{backgroundColor:' lightsteelblue'}
                  }}>
             <NavLink to="newinquiry" style={{ textDecoration: 'none'}}>New Inquiry</NavLink> 
           </Box>  
            
            
           <Box 
               sx={{'backgroundColor':'gainsboro',
               'textAlign':'center',
               'width':'90%',
               'padding':'6%',
               'marginLeft':'5px',
               'marginTop':'10px',
               'fontSize':'28px',
               '&:hover':{backgroundColor:' lightsteelblue'}
                  }}>
             <NavLink to="inquirieslist" style={{ textDecoration:'none'}}>Inquiries</NavLink> 
           </Box>  
         </Grid>
         <Grid  item xs={12} sm={12} md={9}>
         <Outlet/>
         </Grid>
      </Grid>
      </>)};
export default ChemistHomePage;





