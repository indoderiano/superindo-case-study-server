const express=require('express')
const { ProductVariantControllers }=require('../controllers')
// const {Auth}=require('../helper/Auth')

const router=express.Router()


router.get('/data/:productId', ProductVariantControllers.getProductVariantsByProductId)
// router.get('/users', AuthControllers.test)

module.exports=router