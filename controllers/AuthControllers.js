const { db }=require('../connections')
// const encrypt=require('../helper/crypto')
// const jwt=require('jsonwebtoken')
// const nodemailer=require('nodemailer')


module.exports={
    // register: (req, res) => {
    //   const { username, email, password, role } = req.body;

    // }
    // login: (req, res) => {
    //   const query = 'SELECT username'
    //   pool.query
    // }
    test: (req, res) => {
      let query = 'SELECT * FROM users';

      // db.execute(query, [])
      // .then(([rows, fields]) => {
      //   console.log(rows);
      //   return res.status(200).send({rows})
      // })
      // .catch((error) => {
      //   console.log(error);
      //   return res.status(500).send(error);
      // });

      db.execute(query, (error, rows) => {
        if (error) {
          console.error(error);
          return res.status(500).send(error);
        } else {
          console.log(rows);
          return res.status(200).send(rows);
        }
      })

      // db.query(query, (error, results, fields) => {
      //   if (error) {
      //     console.error(error);
      //     return res.status(500).send(error);
      //   } else {
      //     console.log(results);
      //     return res.status(200).send(results);
      //   }
      // })
    }
}



