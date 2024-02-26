const express=require('express')
const { ProductCategoryControllers }=require('../controllers')
const { checkAdmin } = require('../middleware/auth')
// const {Auth}=require('../helper/Auth')

const router=express.Router()


router.get('/data', checkAdmin, ProductCategoryControllers.getProductCategories)
// router.get('/users', AuthControllers.test)

module.exports=router