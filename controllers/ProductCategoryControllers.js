const { db }=require('../connections')


module.exports={
    getProductCategories: (req, res) => {
      let query = 'SELECT * FROM product_categories;';

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
}



