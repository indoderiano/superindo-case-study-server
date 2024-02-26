

# Guide step by step



===========================================================================

## SETUP

in ./connection/mysqldb.ts

use your own database setup

const db=mysql.createPool({
    host:<localhost>,
    user:<database_user>,
    password:<databse_password>,
    database:<database_name>,
})

===========================================================================

## RUN THE SERVER

in your console

npm install
node .

===========================================================================

## MIGRATION

the server has its own routes for creating table and inserting data, so by trigerring these urls will migrate data into your database.


in your browser or postman request get with these url


http://localhost:4000/migrate/create-table-user

http://localhost:4000/migrate/create-table-product-categories

http://localhost:4000/migrate/create-table-products

http://localhost:4000/migrate/create-table-product-variants

http://localhost:4000/migrate/create-table-transactions

http://localhost:4000/migrate/create-table-transaction-details



make sure each url is executed successfully


===========================================================================


## Finish

the server is ready



===========================================================================






