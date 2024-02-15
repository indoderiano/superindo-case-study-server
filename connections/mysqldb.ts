const mysql=require('mysql2')

const db=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'admin',
    database:'superindo_case_study',
    // port:'3306'
})


// db.connect((err)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log('connected to mysql etrainerdb')
// })

module.exports=db





// import mysql, { ConnectionOptions } from 'mysql2/promise';
  
  
// const access: ConnectionOptions = {
//     host: 'localhost',
//     user: 'root',
//     password: 'admin',
//     database: 'superindo_case_study',
// };
  
  
// const db = await mysql.createConnection(access)

// module.exports=db
