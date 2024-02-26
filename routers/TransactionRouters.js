const express=require('express')
const { TransactionControllers }=require('../controllers')
const { checkRole, checkAdmin, checkCustomer } = require('../middleware/auth')
// const {Auth}=require('../helper/Auth')

const router=express.Router()


router.get('/data', checkAdmin, TransactionControllers.getAllTransactions)
router.post('/create', checkCustomer, TransactionControllers.createTransaction)
router.get('/cart', checkCustomer, TransactionControllers.getCartTransaction)
router.post('/checkout/:transactionId', checkCustomer, TransactionControllers.checkout)
// router.get('/users', AuthControllers.test)

module.exports=router