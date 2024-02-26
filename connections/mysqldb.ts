const mysql=require('mysql2')

const db=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'admin',
    database:'superindo_case_study',
    // port:'3306'
})

module.exports=db

