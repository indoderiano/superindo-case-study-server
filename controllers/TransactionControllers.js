const { db }=require('../connections');
const { getTimeStamp } = require('../helper/date');


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
      console.log(req.decoded);

      let date = new Date();

      let { username, role } = req.decoded;

      // CHECK IF THERE EXIST ANY ACTIVE TRANSACTION
      let query_get_active_transaction = "SELECT * FROM transactions WHERE created_user = ? and active = ?";
      db.execute(query_get_active_transaction, [username, true], (error, rows) => {
        if (error) {
          console.log(error);
          return res.status(500).send(error);
        } else {
          console.log("check for transaction active for this user ")
          console.log(rows);
          if ( rows.length > 0 ) {

            let { id, total_amount } = rows[0];

            // CREATE NEW TRANSACTION DETAIL

            let { product_variant_id, price, qty, subtotal } = req.body;

            let query_insert_table_transaction = "INSERT INTO transaction_details ( transaction_id, product_variant_id, price, qty, subtotal, active, created_user, updated_user ) VALUES ( ?, ?, ?, ?, ?, ?, ?, ? );";

            db.execute(query_insert_table_transaction, [id, product_variant_id, price, qty, subtotal, true, username, username], (error, rows) => {
              if (error) {
                console.log(error)
                return res.status(500).send(error);
              } else {
                console.log("create new transaction detail succeed");
                console.log(rows);


                // UPDATE TRANSACTION TOTAL_AMOUNT

                let new_total_amount = total_amount + subtotal;

                let query_update_transaction = "UPDATE transactions SET total_amount = ?, updated_user = ?, updated_date = ? WHERE transactions.id = ?;";

                db.execute(query_update_transaction, [new_total_amount, username, getTimeStamp(), id], (error, rows) => {
                  if (error) {
                    console.log(error);
                    return res.status(500).send(error);
                  } else {
                    console.log("update transaction succeed");
                    console.log(rows);
                    
                    return res.status(200).send(rows)
                  }
                })

              }
            })


          } else {

            // CREATE NEW TRANSACTION

            // let payload = {
            //   product_variant_id: selectedProductVariant.id,
            //   price: selectedProductVariant.price,
            //   qty: inputQty,
            //   subtotal: selectedProductVariant.price*inputQty,
            // };
            // let {  }

            let { subtotal } = req.body;

            let query_insert_table_transaction = "INSERT INTO transactions ( transaction_no, total_amount, active, created_user, updated_user ) VALUES ( ?, ?, true, ?, ? );";

            

            db.execute(query_insert_table_transaction, [date.getTime(), subtotal, username, username], (error, rows) => {
              if (error) {
                console.log(error)
                return res.status(500).send(error);
              } else {
                console.log("insert new transaction succeed");
                console.log(rows);

                // insert table succeed
                // ResultSetHeader {
                //   fieldCount: 0,
                //   affectedRows: 3,
                //   insertId: 1,
                //   info: 'Records: 3  Duplicates: 0  Warnings: 0',
                //   serverStatus: 2,
                //   warningStatus: 0,
                //   changedRows: 0
                // }

                // CREATE NEW TRANSACTION DETAIL

                let { product_variant_id, price, qty, subtotal } = req.body;

                let query_insert_table_transaction = "INSERT INTO transaction_details ( transaction_id, product_variant_id, price, qty, subtotal, active, created_user, updated_user ) VALUES ( ?, ?, ?, ?, ?, ?, ?, ? );";

                db.execute(query_insert_table_transaction, [rows.insertId, product_variant_id, price, qty, subtotal, true, username, username], (error, rows) => {
                  if (error) {
                    console.log(error)
                    return res.status(500).send(error);
                  } else {
                    console.log("create new transaction detail succeed");
                    console.log(rows);

                    return res.status(200).send(rows)
                  }
                })
              }
            })

          }
        }
      })

      
    }
    
}



