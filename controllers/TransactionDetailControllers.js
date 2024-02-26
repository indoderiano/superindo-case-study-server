const { db }=require('../connections')


module.exports={
    getTransactionDetailsByTransactionId: (req, res) => {

      let { transactionId } = req.params;

      console.log("params t id ", transactionId);

      let query = 'SELECT td.*, pv.name as product_variant_name FROM transaction_details td INNER JOIN product_variants pv ON td.product_variant_id=pv.id WHERE td.transaction_id=?;';

      db.execute(query, [transactionId], (error, rows) => {
        if (error) {
          console.error(error);
          return res.status(500).send(error);
        } else {
          console.log(rows);
          return res.status(200).send(rows);
        }
      })
    },
}



