
 import './HeaderSection.css';
 import {useNavigate } from "react-router-dom";

 // ---Material UI-----
 import Typography from '@mui/material/Typography';
 import Box from '@mui/material/Box';
 import Link from '@mui/material/Link';
// ---Material UI-----



function LandingPage(){

   const navigate = useNavigate();
      return(
            <>
            <Box sx={{'backgroundColor':'snow'}}>
             <Box sx={{backgroundColor:'steelblue'}} className='title_design'>
            <Typography sx={{fontFamily:'cursive','color':'lightgrey'}} variant="h2">ASTITVA</Typography>
            </Box>

            <Link sx={{'marginLeft':'28%',fontSize:'35px','color':'peru','&:hover':{'color':' royalblue '}}}
             onClick={()=>navigate("/about")} underline="none">About</Link>

            <Link sx={{'marginLeft':'10%',fontSize:'35px','color':'peru','&:hover':{'color':'royalblue '}}}
            onClick={()=>navigate("/signup")} underline="none">SignUp</Link>

            <Link sx={{'marginLeft':'10%',fontSize:'35px','color':'peru','&:hover':{'color':' royalblue '}}}
             onClick={()=>navigate("/login")}  underline="none">LogIn</Link>
             </Box>
           </>
           )
     }

export  default LandingPage;

