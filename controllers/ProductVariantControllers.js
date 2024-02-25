const { db }=require('../connections')
// const encrypt=require('../helper/crypto')
// const jwt=require('jsonwebtoken')
// const nodemailer=require('nodemailer')


module.exports={
    getProductVariantsByProductId: (req, res) => {

      // console.log("req query is ", req.params);
      let { productId } = req.params;
      let query = 'SELECT * FROM product_variants WHERE product_id=?;';

      db.execute(query, [productId], (error, rows) => {
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



