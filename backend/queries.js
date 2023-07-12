const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'astitva',
  password: 'avantnet',
  port: 5433,
});

// ---chemist Registration Sign up ---

const createSignUp = (request, response) => {
  const {pharmacy_name, contact_name, email_id,mobile_no, door_no, street,  area, city, state_name, pincode, chemist_drug_licence_no, chemist_photo} = request.body;

  pool.query(
 'INSERT INTO chemist_registration (pharmacy_name,contact_name,email_id,mobile_no,door_no,street,area,city,state_name,pincode,chemist_drug_licence_no,chemist_photo,submitted_on) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,CURRENT_TIMESTAMP) RETURNING *',
    [ pharmacy_name,
      contact_name,
      email_id,
      mobile_no,
      door_no,
      street,
      area,
      city,
      state_name,      
      pincode,
      chemist_drug_licence_no,
      chemist_photo
     ],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`User added with ID: ${results.rows[0].id}`);
    }
  );
};

//---- Chemist Registration Request Appprove-------


const updateRegRequestApprove = (request, response) => {
      const id = parseInt(request.params.id);

      const acceptquery = `
         UPDATE chemist_registration
         SET status = 'Approved',reason='NA'
        WHERE chemist_id = $1` ;
   
         pool.query(acceptquery,[id],(error, results) => {
           if (error) {
             throw error;
           }
           response.status(200).send(`User modified with ID: ${id}`);
         })
       };

// --- Chemist Registration Request Reject REASON----

const updateRegRequestReject = (request, response) => {
const id = parseInt(request.params.id);
  const {reason} = request.body;

const rejectquery = `
     UPDATE chemist_registration
     SET status ='Rejected', reason =$2
       WHERE chemist_id = $1`;

     pool.query(rejectquery, [id,reason], (error, results) => {
       if (error) {
         throw error;
       }
       response.status(200).send(`User modified with ID: ${id}`);
     })
   };



 
// --Viewing Registration requests from Chemist ----

const getSignup = (request, response) => {
  pool.query('SELECT * FROM chemist_registration order by chemist_id', (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

// --Viewing Registration requests from Chemist by ID ----
const getSignupById = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query('SELECT * FROM chemist_registration WHERE chemist_id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};


// --Viewing New Registration only  from Chemist by ID ----
const getNewRequests = (request, response) => {
  
  // const id = parseInt(request.params.id);

  const status = 'New';

    pool.query('SELECT * FROM chemist_registration WHERE status= $1', [status], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};






// -- Creating users_masters login table----

const createUserTable = (request, response) => {
  const {name,email,pwd,user_type} = request.body;

  pool.query(
 'INSERT INTO users_masters (user_name,email,pwd,user_type,added_on) VALUES ($1,$2,$3,$4,CURRENT_TIMESTAMP) RETURNING *',
    [
      name,
      email,
      pwd,
      user_type
     ],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`User added with ID: ${results.rows[0].id}`);
    }
  );
};

// -- Validating login credentials from users_masters login table----


const getloginverify = (request, response) => {
  pool.query('SELECT * FROM users_masters', (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

 // -- Creating operationteam_masters table----

const createOperDetails = (request, response) => {
  const {name,email,mobileNumber,pwd,status} = request.body;

  pool.query(
 'INSERT INTO operationteam_masters (operator_name,operator_email,operator_mobile,operator_pwd,operator_status,added_on) VALUES ($1,$2,$3,$4,$5,CURRENT_TIMESTAMP) RETURNING *',
    [ name,
      email,
      mobileNumber,
      pwd,
      status,
     ],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`User added with ID: ${results.rows[0].id}`);
    }
  );
};

 // -- Viewing  operationteam_masters ----

const getOperatorDetails = (request, response) => {
  pool.query('SELECT * FROM operationteam_masters order by id', (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

 // -- Viewing  operationteam_masters  by ID----

const getOperatorDetailsByID = (request, response) => {
  const id = parseInt(request.params.id);
  pool.query('SELECT * FROM operationteam_masters WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

// --Creating Product Inquiry table----

const createProdInquiry = (request, response) => {
  const {product_name,product_quantity,prod_exp_delivery,prod_photo} = request.body;

  pool.query(
 'INSERT INTO inquiry_details (product_name,product_quantity,prod_exp_delivery,prod_photo) VALUES ($1,$2,$3,$4) RETURNING *',
    [ 
      product_name,
      product_quantity,
      prod_exp_delivery,
      prod_photo,
    
     ],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`User added with ID: ${results.rows[0].id}`);
    }
  );
};



// --Fetching inquiry_details  table----

const getProdInquiryRecord = (request, response) => {
  pool.query('SELECT * FROM inquiry_details order by id', (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

// --Fetching inquiry_details   by ID----

const getProdInquiryRecordByID = (request, response) => {
  const id = parseInt(request.params.id);
  pool.query('SELECT * FROM inquiry_details WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
}



//---- Product Inquiry Available-------


const ProductAvailable = (request, response) => {
  const id = parseInt(request.params.id);

  const availablequery = `
     UPDATE inquiry_details
     SET status = 'Available',reason='NA'
    WHERE id = $1` ;

     pool.query(availablequery,[id],(error, results) => {
       if (error) {
         throw error;
       }
       response.status(200).send(`User modified with ID: ${id}`);
     })
   };

//---- Product Inquiry Not Available-------

   const ProductNotAvailable = (request, response) => {

    const id = parseInt(request.params.id);
    const {reason} = request.body;

    const notavailablequery = `
       UPDATE inquiry_details
       SET status = 'Not Available', reason =$2
        WHERE id = $1` ;

       
       pool.query(notavailablequery,[id,reason],(error, results) => {
         if (error) {
           throw error;
         }
         response.status(200).send(`User modified with ID: ${id}`);
       })
     };
  
//--- Placing Order----

const createOrders = (request, response) => {
  const { product_name,product_quantity, prod_exp_delivery,prod_photo} = request.body;

  pool.query(
 'INSERT INTO orders_masters (product_name,product_quantity,prod_exp_delivery,prod_photo) VALUES ($1,$2,$3,$4) RETURNING *',
    [ product_name,
      product_quantity,
      prod_exp_delivery,
      prod_photo,
     ],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`User added with ID: ${results.rows[0].id}`);
    }
  );
};

module.exports = {
 
  createSignUp,
  updateRegRequestApprove,
  updateRegRequestReject,
  getSignup,
  getSignupById,
  getNewRequests,
  createUserTable,
  getloginverify,
  createOperDetails,
  getOperatorDetails,
  getOperatorDetailsByID,

  createProdInquiry,
  getProdInquiryRecord,
  getProdInquiryRecordByID,
  ProductAvailable,
  ProductNotAvailable,
  createOrders
};


// --chemsit rejected working fine---


//  const updateRegRequestReject = (request, response) => {

//       const id = parseInt(request.params.id);
//       // const reason=request.param.id;

//       const rejectquery = `
//          UPDATE chemist_registration
//          SET status ='Rejected', reason ='hi'
//            WHERE chemist_id = $1`;
   
//          pool.query(rejectquery, [id], (error, results) => {
//            if (error) {
//              throw error;
//            }
//            response.status(200).send(`User modified with ID: ${id}`);
//          })
//        };