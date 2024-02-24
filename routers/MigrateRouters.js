const express=require('express')
const { MigrateControllers }=require('../controllers')

const router=express.Router()


router.get('/create-table-user', MigrateControllers.createTableUser)
router.get('/create-table-jokes', MigrateControllers.createTableJokes)
router.get('/create-table-product-categories', MigrateControllers.createTableProductCategories)

module.exports=router