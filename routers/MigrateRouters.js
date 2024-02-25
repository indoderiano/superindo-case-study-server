const express=require('express')
const { MigrateControllers }=require('../controllers')

const router=express.Router()


router.get('/create-table-user', MigrateControllers.createTableUser)
router.get('/create-table-jokes', MigrateControllers.createTableJokes)
router.get('/create-table-product-categories', MigrateControllers.createTableProductCategories)
router.get('/create-table-products', MigrateControllers.createTableProduct)
router.get('/create-table-product-variants', MigrateControllers.createTableProductVariant)
router.get('/create-table-transactions', MigrateControllers.createTableTransaction)
router.get('/create-table-transaction-details', MigrateControllers.createTableTransactionDetail)

module.exports=router