const express=require('express')
const { ProductCategoryControllers }=require('../controllers')
const { checkAdmin } = require('../middleware/auth')

const router=express.Router()


router.get('/data', checkAdmin, ProductCategoryControllers.getProductCategories)

module.exports=router