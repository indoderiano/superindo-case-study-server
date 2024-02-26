const { db }=require('../connections')


module.exports={
    getProducts: (req, res) => {
      let query = 'SELECT * FROM products;';

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
    getProductsByCategoryId: (req, res) => {
      let { category_id } = req.params;
      console.log("category id ", category_id);
      let query;


      if ( category_id != "null" ) {
        console.log('category exist');
        query = 'SELECT p.name as product_name, p.plu, p.product_category_id, pv.* FROM product_variants pv INNER JOIN products p ON pv.product_id=p.id WHERE p.product_category_id=?;';
      } else {
        console.log('category empty')
        query = 'SELECT p.name as product_name, p.plu, p.product_category_id, pv.* FROM product_variants pv INNER JOIN products p ON pv.product_id=p.id;';
      }


      db.execute(query, [category_id], (error, rows) => {
        if (error) {
          console.error(error);
          return res.status(500).send(error);
        } else {
          console.log(rows);
          return res.status(200).send(rows);
        }
      })
    }
}



