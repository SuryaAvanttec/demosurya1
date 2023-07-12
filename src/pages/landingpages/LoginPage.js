
import './HeaderSection.css';
 import axios from "axios";
 import { useState } from "react";
 import { useNavigate } from "react-router-dom";

// ---Material UI-----
import Link from '@mui/material/Link';
import { TextField, FormControl, Button } from "@mui/material";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ThumbUpOffAlt } from '@mui/icons-material';
import Grid from '@mui/material/Grid';

// ---Material UI-----

          const LoginPage = () => {

            const navigate = useNavigate();

            const [userEmail, setEmail] = useState("");
            const [password, setpassword] = useState("");
            const [data, setData] = useState([]);

           axios.get(`http://localhost:4000/users_masters`)
            .then((getData) => {
             setData(getData.data);
                               })

           const account_allEmails = data.map((records)=> records.email);
          
          const handleSubmit = (e) => {
                  e.preventDefault()

                const indexof_inpEmail = account_allEmails.indexOf(userEmail);
                console.log(account_allEmails)
           if(indexof_inpEmail<0)
               {
                alert("Invalid Email");
               }
          else {
               const tablePwd = (data[indexof_inpEmail].pwd)
               const tableUserType = (data[indexof_inpEmail].user_type)
            if (account_allEmails.includes(userEmail) && (tablePwd===password))
                {
                  if(tableUserType==="Chemist")
                    {
                      navigate("/chemisthome");
                      console.log("He is a chemist")
                    }
                  else if(tableUserType==="Operator")
                    {
                      navigate("/operatorhome");
                      console.log("He is a Operator")
                    }
                  else{
                      console.log("He is an Admin")
                      navigate("/adminhome");
                      }
                }
             else{
                console.log("fail")  
                alert("Invalid credentials")     
                }
              }};
        return (
            <>
           <Box className="loginPageTitle">
           <Typography sx={{fontFamily:'cursive','color':'steelblue'}} variant="h2">ASTITVA</Typography>
           </Box>
          <div >
          <Grid sx={{'backgroundColor':'snow '}} container>
              <Grid xs={12} sm={12} md={8}>
              <div>
                <Typography 
                sx={{
                fontFamily:'cursive',
                color:' lightslategrey',
                textDecoration: 'underline',
                marginLeft:'20%',
                marginTop:'5%',
                }} 
                variant="h4">
                Login Form
               </Typography>

              <form id="login_form" onSubmit={handleSubmit}>
     
              <TextField 
              id="emailcolumn"
              name="txtEmail"
              required
              value={userEmail}
              variant="standard"  
              label="Email"
              type="text"
              sx={{marginLeft:'15%',
              marginTop:'4%',
              width:'42%'}} 
              onChange={(e) => setEmail(e.target.value)}/>
             <br></br> 

             <TextField 
             name="txtPassword"
             required
             value={password}
             variant="standard"  
             label="Password"
            type="password"
            sx={{marginLeft:'15%',
             marginTop:'5%',
             width:'42%'}} 
            onChange={(e) => setpassword(e.target.value)}/> 
            <br></br>

           <Button  sx={{marginLeft:'15%',
           marginTop:'5%',
           width:'12%',
           '&:hover':{backgroundColor:'tan'}}}
            
            type="submit" variant="contained">Submit</Button>
      </form>
       <div style={{marginLeft:'13%',fontSize:'27px',marginTop:'30px'}}>
      <Link href="#" underline="always">Forgot Password?</Link> &nbsp;&nbsp;
      <Link href="signup" underline="always">Create an Account?</Link>
      </div>
       </div>
            </Grid>
            </Grid>
            
          
        
        </div>   
  </>
  )
};


export default LoginPage;