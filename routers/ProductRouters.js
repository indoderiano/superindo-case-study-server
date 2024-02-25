const express=require('express')
const { ProductControllers }=require('../controllers')
// const {Auth}=require('../helper/Auth')

const router=express.Router()


router.get('/data-category/:category_id', ProductControllers.getProductsByCategoryId)
router.get('/data', ProductControllers.getProducts)
// router.get('/users', AuthControllers.test)

module.exports=router