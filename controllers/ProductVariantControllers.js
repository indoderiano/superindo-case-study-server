const { db }=require('../connections')


module.exports={
    getProductVariantsByProductId: (req, res) => {

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



