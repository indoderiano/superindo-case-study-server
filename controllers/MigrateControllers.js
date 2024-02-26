const { db }=require('../connections')
const encrypt=require('../helper/crypto')
const jwt=require('jsonwebtoken')


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
          // let password = jwt.sign("dianawayne", private_key);
          
          let username = 'bruce';
          let email = 'batman@gmail.com';
          let role = 'administrator';
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
    createTableProductCategories: (req, res) => {
      // (id, name, active, created_user, created_date, updated_user,
      //   updated_date)
      // let query_create_table_users = "CREATE TABLE `superindo_case_study`.`product_categories` (`id` int AUTO_INCREMENT, `name` char(128),`active` boolean NOT NULL,`created_user` char(128) NOT NULL,`created_date` timestamp NOT NULL DEFAULT NOW(),`updated_user` char(128) NOT NULL,`updated_date` timestamp NOT NULL DEFAULT NOW(), PRIMARY KEY (id)); INSERT INTO product_categories ( name, active, created_user, updated_user ) VALUES ( 'makanan', true, 'diana', 'diana' ), ( 'minuman', true, 'diana', 'diana' ), ( 'snack', true, 'diana', 'diana' );";

      let query_create_table_product_categories = "CREATE TABLE `superindo_case_study`.`product_categories` (`id` int AUTO_INCREMENT, `name` char(128),`active` boolean NOT NULL,`created_user` char(128) NOT NULL,`created_date` timestamp NOT NULL DEFAULT NOW(),`updated_user` char(128) NOT NULL,`updated_date` timestamp NOT NULL DEFAULT NOW(), PRIMARY KEY (id));";

      // let query_create_table_product_categories = "INSERT INTO product_categories ( name, active, created_user, updated_user ) VALUES ( 'makanan', true, 'diana', 'diana' ), ( 'minuman', true, 'diana', 'diana' ), ( 'snack', true, 'diana', 'diana' );";


      db.execute(query_create_table_product_categories, (error, rows) => {
        if (error) {
          console.log(error);
          return res.status(500).send(error);
        } else {
          console.log("create table succeed");
          console.log(rows);

          let query_insert_table_product_categories = "INSERT INTO product_categories ( name, active, created_user, updated_user ) VALUES ( 'makanan', true, 'diana', 'diana' ), ( 'minuman', true, 'diana', 'diana' ), ( 'snack', true, 'diana', 'diana' );";

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
    },
    createTableProduct: (req, res) => {
      // CREATE TABLE Orders (
      //     OrderID int NOT NULL,
      //     OrderNumber int NOT NULL,
      //     PersonID int,
      //     PRIMARY KEY (OrderID),
      //     FOREIGN KEY (PersonID) REFERENCES Persons(PersonID)
      // );

      let query_create_table_products = "CREATE TABLE `superindo_case_study`.`products` (`id` int AUTO_INCREMENT, `plu` char(128), `name` char(128),`product_category_id` int, `active` boolean,`created_user` char(128) NOT NULL,`created_date` timestamp NOT NULL DEFAULT NOW(),`updated_user` char(128) NOT NULL,`updated_date` timestamp NOT NULL DEFAULT NOW(), PRIMARY KEY (id), FOREIGN KEY (product_category_id) REFERENCES product_categories(id));";

      // let query_create_table_product_categories = "INSERT INTO product_categories ( name, active, created_user, updated_user ) VALUES ( 'makanan', true, 'diana', 'diana' ), ( 'minuman', true, 'diana', 'diana' ), ( 'snack', true, 'diana', 'diana' );";


      db.execute(query_create_table_products, (error, rows) => {
        if (error) {
          console.log(error);
          return res.status(500).send(error);
        } else {
          console.log("create table succeed");
          console.log(rows);

          let query_insert_table_products = "INSERT INTO products ( plu, name, product_category_id, active, created_user, updated_user ) VALUES ( 'PDCT0001', 'indomie', 1, true, 'diana', 'diana' ), ( 'PDCT0002', 'sandwich', 1, true, 'diana', 'diana' ), ( 'PDCT0003', 'jus', 2, true, 'diana', 'diana' );";

          db.execute(query_insert_table_products, (error, rows) => {
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
    },
    createTableProductVariant: (req, res) => {

      let query_create_table_product_variant = "CREATE TABLE `superindo_case_study`.`product_variants` (`id` int AUTO_INCREMENT, `product_id` int, `code` char(128), `name` char(128),`qty` int, `price` int, `active` boolean,`created_user` char(128) NOT NULL,`created_date` timestamp NOT NULL DEFAULT NOW(),`updated_user` char(128) NOT NULL,`updated_date` timestamp NOT NULL DEFAULT NOW(), PRIMARY KEY (id), FOREIGN KEY (product_id) REFERENCES products(id));";

      // let query_create_table_product_categories = "INSERT INTO product_categories ( name, active, created_user, updated_user ) VALUES ( 'makanan', true, 'diana', 'diana' ), ( 'minuman', true, 'diana', 'diana' ), ( 'snack', true, 'diana', 'diana' );";


      db.execute(query_create_table_product_variant, (error, rows) => {
        if (error) {
          console.log(error);
          return res.status(500).send(error);
        } else {
          console.log("create table product variant succeed");
          console.log(rows);

          let query_insert_table_product_variant = "INSERT INTO product_variants ( product_id, code, name, qty, price, active, created_user, updated_user ) VALUES ( 1, 'PDCT00010001', 'Indomie Goreng Original', 100, 3000, true, 'diana', 'diana' ), ( 1, 'PDCT00010002', 'Indomie Ayam Bawang', 100, 2700, true, 'diana', 'diana' ), ( 1, 'PDCT00010003', 'Indomie Goreng Aceh', 100, 3000, true, 'diana', 'diana' ), ( 1, 'PDCT00010004', 'Indomie Goreng Original', 100, 3000, true, 'diana', 'diana' ), ( 2, 'PDCT00020001', 'Sandwich Ayam', 100, 15000, true, 'diana', 'diana' ), ( 2, 'PDCT00020002', 'Sandwich Tuna', 100, 15000, true, 'diana', 'diana' ), ( 3, 'PDCT00030001', 'Jus Alpukat', 100, 10000, true, 'diana', 'diana' ), ( 3, 'PDCT00030002', 'Jus Jeruk', 100, 10000, true, 'diana', 'diana' );";

          db.execute(query_insert_table_product_variant, (error, rows) => {
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
    },
    createTableTransaction: (req, res) => {

      let query_create_table_transactions = "CREATE TABLE `superindo_case_study`.`transactions` (`id` int AUTO_INCREMENT, `transaction_no` char(128), `total_amount` int, `active` boolean,`created_user` char(128) NOT NULL,`created_date` timestamp NOT NULL DEFAULT NOW(),`updated_user` char(128) NOT NULL,`updated_date` timestamp NOT NULL DEFAULT NOW(), PRIMARY KEY (id));";


      db.execute(query_create_table_transactions, (error, rows) => {
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
    createTableTransactionDetail: (req, res) => {

      let query_create_table_transaction_details = "CREATE TABLE `superindo_case_study`.`transaction_details` (`id` int AUTO_INCREMENT, `transaction_id` int, `product_variant_id` int,`price` int, `qty` int, `subtotal` int, `active` boolean,`created_user` char(128) NOT NULL,`created_date` timestamp NOT NULL DEFAULT NOW(),`updated_user` char(128) NOT NULL,`updated_date` timestamp NOT NULL DEFAULT NOW(), PRIMARY KEY (id), FOREIGN KEY (transaction_id) REFERENCES transactions(id), FOREIGN KEY (product_variant_id) REFERENCES product_variants(id));";


      db.execute(query_create_table_transaction_details, (error, rows) => {
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
}



