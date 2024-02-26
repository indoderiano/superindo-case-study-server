const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const bearertoken = require('express-bearer-token')

const app = express()
const port = 4000


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors())
app.use(bearertoken())


app.get('/', (req, res) => {
  res.send('Hello World!')
})

const {
  AuthRouters,
  MigrateRouters,
  ProductCategoryRouters,
  ProductRouters,
  ProductVariantRouters,
  TransactionRouters,
  TransactionDetailRouters,
} = require('./routers')

app.use('/users', AuthRouters)
app.use('/migrate', MigrateRouters)
app.use('/product-category', ProductCategoryRouters)
app.use('/product', ProductRouters)
app.use('/product-variant', ProductVariantRouters)
app.use('/transaction', TransactionRouters)
app.use('/transaction-detail', TransactionDetailRouters)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})