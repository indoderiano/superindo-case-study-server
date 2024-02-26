const express=require('express')
const { TransactionDetailControllers }=require('../controllers')
const { checkRole, checkAdmin, checkCustomer, checkMember } = require('../middleware/auth')
// const {Auth}=require('../helper/Auth')

const router=express.Router()


router.get('/transaction-id/:transactionId', checkMember, TransactionDetailControllers.getTransactionDetailsByTransactionId)
// router.get('/data', TransactionControllers.getAllTransactions)
// router.post('/create', checkCustomer, TransactionControllers.createTransaction)
// router.get('/users', AuthControllers.test)

module.exports=router