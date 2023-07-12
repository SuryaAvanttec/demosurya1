import React from 'react';
import { BrowserRouter,Routes, Route } from "react-router-dom";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// ----Importing Pages ------

import LandingPage from './pages/landingpages/LandingPage';
import AboutPage from './pages/landingpages/AboutPage';
import ChemistSignup from './pages/landingpages/ChemistSignup';
import LoginPage from './pages/landingpages/LoginPage';

import AdminHomePage from './pages/Admin/AdminHomePage';
import AdminChemistPage from './pages/Admin/AdminChemistPage';
import AdminOperatorPage from './pages/Admin/AdminOperatorPage';
import AddOperator from './pages/Admin/AddOperator';
import ViewOperator from './pages/Admin/ViewOperator';


import ChemistHomePage from './pages/chemist/ChemistHomePage';
import NewInquiry from './pages/chemist/NewInquiry';
import InquiriesList from './pages/chemist/InquiriesList';


import OperatorHomePage from './pages/operator/OperatorHomePage';
import RegistrationRequests from './pages/operator/RegistrationRequests';
import NewRequests from './pages/operator/NewRequests';
import ProductInquiries from './pages/operator/ProductInquiries';




function App() {
     return (
     <>    
       <BrowserRouter>
         <Routes>
            {/* Common Pages */}
            <Route exact path="/" element={<LandingPage/>}/>  
            <Route exact path="about" element={<AboutPage/>}/> 
            <Route exact path= "signup" element={<ChemistSignup/>}/>
            <Route exact path= "login" element={<LoginPage/>}/>  
            

           {/* Admin Module */}
             <Route path="adminhome" element={<AdminHomePage/>}/>
              <Route path="adminhomechemistpg" element={<AdminChemistPage/>}/> 
              <Route path="adminhomeoperatorpg" element={<AdminOperatorPage/>}> 
                 <Route path="addoperator" element={<AddOperator/>}/>
                 <Route path="viewoperator" element={<ViewOperator/>}/> 
              </Route>

            {/* Chemist Module */}
             <Route path="chemisthome" element={<ChemistHomePage/>}>
               <Route path="newinquiry" element={<NewInquiry/>}/>
               <Route path="inquirieslist" element={<InquiriesList/>}/> 
            </Route>

           {/* Operator Module */}
           
           <Route path="operatorhome" element={<OperatorHomePage/>}/>
           <Route path="registrationreq" element={<RegistrationRequests />}/>
           <Route path="newrequests" element={<NewRequests/>}/>
           <Route path="productinquiries" element={<ProductInquiries/>}/>
           </Routes>

      </BrowserRouter>    
    </>
   );
   }
export default App;








