const express=require('express')
const { ProductControllers }=require('../controllers')

const router=express.Router()


router.get('/data-category/:category_id', ProductControllers.getProductsByCategoryId)
router.get('/data', ProductControllers.getProducts)

module.exports=router