const { db }=require('../connections')
// const encrypt=require('../helper/crypto')
// const jwt=require('jsonwebtoken')
// const nodemailer=require('nodemailer')


module.exports={
    getAllTransactions: (req, res) => {
      let query = 'SELECT * FROM transactions;';

      db.execute(query, (error, rows) => {
        if (error) {
          console.error(error);
          return res.status(500).send(error);
        } else {
          console.log(rows);
          return res.status(200).send(rows);
        }
      })
    },

    createTransaction: (req, res) => {

      console.log(req.body);
      // let {  }

      let query_create_table_transactions = "CREATE TABLE `superindo_case_study`.`transactions` (`id` int AUTO_INCREMENT, `transaction_no` int AUTO_INCREMENT, `total_amount` int, `active` boolean,`created_user` char(128) NOT NULL,`created_date` timestamp NOT NULL DEFAULT NOW(),`updated_user` char(128) NOT NULL,`updated_date` timestamp NOT NULL DEFAULT NOW(), PRIMARY KEY (id));";

      let query_insert_table_transaction = "INSERT INTO transactions ( total_amount, active, created_user, updated_user ) VALUES ( 'makanan', true, 'diana', 'diana' ), ( 'minuman', true, 'diana', 'diana' ), ( 'snack', true, 'diana', 'diana' );";
    }
    
}



