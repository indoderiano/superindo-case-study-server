const { db }=require('../connections')
// const encrypt=require('../helper/crypto')
const jwt=require('jsonwebtoken')
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
      let query = 'SELECT * FROM users;';

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
    },
    createTableUser: (req, res) => {
      let query_create_table_users = 'CREATE TABLE `superindo_case_study`.`users` (`id` int AUTO_INCREMENT,`username` text,`email` text,`role` text,`password` varchar(255), PRIMARY KEY (id));';

      db.execute(query_create_table_users, (error, rows) => {
        if (error) {
          console.log(error);
          return res.status(500).send(error);
        } else {
          console.log("create table succeed");
          console.log(rows);


          // INSERT A USER
          let private_key = "superindo";
          let password = jwt.sign("brucewayne", private_key);
          let query_insert_user = "INSERT INTO `superindo_case_study`.`users` (`username`, `email`, `role`, `password`) VALUES ('bruce', 'batman@gmail.com', 'customer', ?);";

          console.log("password is ", password);


          db.execute(query_insert_user, [password], (error, rows) => {
            if (error) {
              console.log(error);
              return res.status(500).send(error);
            } else {
              console.log("insert user succeed");
              console.log(rows);
              return res.status(200).send(rows);
            }
          })
        }
      })
    }
}



