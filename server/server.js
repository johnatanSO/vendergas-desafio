const express = require('express')
const app = express()
const cors = require('cors');
const userRouter = require('./routes/userRouter')
require('dotenv').config()

app.use(cors())
app.use("/", express.json())
app.use('/user', userRouter)
app.listen(process.env.PORT, ()=>{
  console.log('Server is running on port 3000')
})