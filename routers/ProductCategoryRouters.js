const express=require('express')
const { ProductCategoryControllers }=require('../controllers')
// const {Auth}=require('../helper/Auth')

const router=express.Router()


router.get('/data', ProductCategoryControllers.getProductCategories)
// router.get('/users', AuthControllers.test)

module.exports=router