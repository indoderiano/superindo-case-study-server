const express=require('express')
const { TransactionDetailControllers }=require('../controllers')
const { checkMember } = require('../middleware/auth')

const router=express.Router()


router.get('/transaction-id/:transactionId', checkMember, TransactionDetailControllers.getTransactionDetailsByTransactionId)


module.exports=router