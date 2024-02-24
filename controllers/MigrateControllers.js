const { db }=require('../connections')
const encrypt=require('../helper/crypto')
const jwt=require('jsonwebtoken')
// const nodemailer=require('nodemailer')


module.exports={
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
          // let password = jwt.sign("brucewayne", private_key);
          
          let username = 'bruce';
          let email = 'batman@gmail.com';
          let role = 'customer';
          let password = encrypt('iambatman');
          

          let query_insert_user = "INSERT INTO `superindo_case_study`.`users` (`username`, `email`, `role`, `password`) VALUES (?, ?, ?, ?);";

          console.log("password is ", password);


          db.execute(query_insert_user, [username, email, role, password], (error, rows) => {
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
    },
    createTableJokes: (req, res) => {
      // let query_create_table_jokes = "CREATE TABLE jokes (a INT NOT NULL AUTO_INCREMENT PRIMARY KEY, joke TEXT NOT NULL);LOAD DATA INFILE '/jokes.txt' INTO TABLE jokes FIELDS TERMINATED BY '' LINES TERMINATED BY '\n%%\n';";


      // let query_create_table_jokes = "CREATE TABLE jokes (a INT NOT NULL AUTO_INCREMENT PRIMARY KEY, joke TEXT NOT NULL);";
      let query_create_table_jokes = "LOAD DATA INFILE '/jokes.txt' INTO TABLE jokes;";

      // let query_create_table_jokes = "CREATE TABLE jokes (a INT NOT NULL AUTO_INCREMENT PRIMARY KEY, joke TEXT NOT NULL);LOAD DATA INFILE '/jokes.txt' INTO TABLE jokes;";




      db.execute(query_create_table_jokes, (error, rows) => {
        if (error) {
          console.log(error);
          return res.status(500).send(error);
        } else {
          console.log("create table succeed");
          console.log(rows);

          return res.status(200).send(rows);
        }
      })
    },
    createTableProductCategories: (req, res) => {
      // (id, name, active, created_user, created_date, updated_user,
      //   updated_date)
      // let query_create_table_users = "CREATE TABLE `superindo_case_study`.`product_categories` (`id` int AUTO_INCREMENT, `name` char(128),`active` boolean NOT NULL,`created_user` char(128) NOT NULL,`created_date` timestamp NOT NULL DEFAULT NOW(),`updated_user` char(128) NOT NULL,`updated_date` timestamp NOT NULL DEFAULT NOW(), PRIMARY KEY (id)); INSERT INTO product_categories ( name, active, created_user, updated_user ) VALUES ( 'makanan', true, 'bruce', 'bruce' ), ( 'minuman', true, 'bruce', 'bruce' ), ( 'snack', true, 'bruce', 'bruce' );";

      let query_create_table_product_categories = "CREATE TABLE `superindo_case_study`.`product_categories` (`id` int AUTO_INCREMENT, `name` char(128),`active` boolean NOT NULL,`created_user` char(128) NOT NULL,`created_date` timestamp NOT NULL DEFAULT NOW(),`updated_user` char(128) NOT NULL,`updated_date` timestamp NOT NULL DEFAULT NOW(), PRIMARY KEY (id));";

      // let query_create_table_product_categories = "INSERT INTO product_categories ( name, active, created_user, updated_user ) VALUES ( 'makanan', true, 'bruce', 'bruce' ), ( 'minuman', true, 'bruce', 'bruce' ), ( 'snack', true, 'bruce', 'bruce' );";


      db.execute(query_create_table_product_categories, (error, rows) => {
        if (error) {
          console.log(error);
          return res.status(500).send(error);
        } else {
          console.log("create table succeed");
          console.log(rows);

          let query_insert_table_product_categories = "INSERT INTO product_categories ( name, active, created_user, updated_user ) VALUES ( 'makanan', true, 'bruce', 'bruce' ), ( 'minuman', true, 'bruce', 'bruce' ), ( 'snack', true, 'bruce', 'bruce' );";

          db.execute(query_insert_table_product_categories, (error, rows) => {
            if (error) {
              console.log(error);
              return res.status(500).send(error);
            } else {
              console.log("insert table succeed");
              console.log(rows);
              return res.status(200).send(rows);
            }
          })

        }
      })
    }
}



