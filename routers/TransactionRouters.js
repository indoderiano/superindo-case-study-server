const express=require('express')
const { TransactionControllers }=require('../controllers')
// const {Auth}=require('../helper/Auth')

const router=express.Router()


router.get('/data', TransactionControllers.getAllTransactions)
router.post('/create', TransactionControllers.createTransaction)
// router.get('/users', AuthControllers.test)

module.exports=router