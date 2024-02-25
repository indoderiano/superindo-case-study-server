const { db }=require('../connections')
const encrypt=require('../helper/crypto')
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
    login: (req, res) => {
      console.log("request login");
      console.log(req.body)

      let { username, password } = req.body;

      // let pass = "eyJhbGciOiJIUzI1NiJ9.YnJ1Y2V3YXluZQ.H5gqnDSh2DVBXw52eH493G1H_dXBChpGPMGVXQslXBk";

      let query_check_user = `select * from users where username = ? and password = ?`;
      
      db.execute(query_check_user, [username, encrypt(password)], (error, rows) => {
        if (error) {
          console.log(error);
          return res.status(500).send(error);
        } else {
          // console.log("");
          console.log(rows);

          if ( rows.length == 0 ) {
            let error_description = "user not found";
            return res.status(500).send({error_description})
          } else {
            let user = rows[0];
            let { username, email, role } = user;

            let private_key = "superindo";

            let access_token = jwt.sign({ username, role }, private_key, {expiresIn: '24h'});

            let user_data = {
              username,
              email,
              role,
              access_token
            };
  
            return res.status(200).send(user_data);

          }

        }
      })
    },
}



