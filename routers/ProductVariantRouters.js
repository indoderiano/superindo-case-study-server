const express=require('express')
const { ProductVariantControllers }=require('../controllers')

const router=express.Router()


router.get('/data/:productId', ProductVariantControllers.getProductVariantsByProductId)

module.exports=router