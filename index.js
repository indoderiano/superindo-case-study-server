const express = require('express')
// const bodyParser = require('body-parser')
// const cors = require('cors')
// const bearertoken = require('express-bearer-token')

const app = express()
const port = 3000





app.get('/', (req, res) => {
  res.send('Hello World!')
})

const { AuthRouters } = require('./routers')

app.use('/users', AuthRouters)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})