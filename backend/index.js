const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 4000;

const db = require('./queries');

app.use(bodyParser.json());
app.use(cors({
  origin: '*'
}));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/', (request, response) => {
  response.json({ info:'Node.js, Express, and Postgres API' });
});


app.post('/chemist_registration', db.createSignUp);
app.put('/chemist_registration_accept/:id', db.updateRegRequestApprove);
app.put('/chemist_registration_reject/:id', db.updateRegRequestReject);



app.get('/chemist_registration', db.getSignup);
app.get('/chemist_registration/:id', db.getSignupById);
app.get('/chemist_registration_new', db.getNewRequests);




app.post('/users_masters', db.createUserTable);
app.get('/users_masters', db.getloginverify);
app.post('/operationteam_masters', db.createOperDetails);
app.get('/operationteam_masters', db.getOperatorDetails);
app.get('/operationteam_masters/:id', db.getOperatorDetailsByID);

app.post('/inquiry_details', db.createProdInquiry);
app.get('/inquiry_details', db.getProdInquiryRecord);
app.get('/inquiry_details/:id', db.getProdInquiryRecordByID);
app.put('/inquiry_details_available/:id', db.ProductAvailable);
app.put('/inquiry_details_notavailable/:id', db.ProductNotAvailable);



app.post('/orders_masters', db.createOrders);

app.listen(port,() => {
  console.log(`App running on port ${port}.`);
});
