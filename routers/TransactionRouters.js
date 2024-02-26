const express=require('express')
const { TransactionControllers }=require('../controllers')
const { checkAdmin, checkCustomer } = require('../middleware/auth')

const router=express.Router()


router.get('/data', checkAdmin, TransactionControllers.getAllTransactions)
router.post('/create', checkCustomer, TransactionControllers.createTransaction)
router.get('/cart', checkCustomer, TransactionControllers.getCartTransaction)
router.post('/checkout/:transactionId', checkCustomer, TransactionControllers.checkout)

module.exports=router