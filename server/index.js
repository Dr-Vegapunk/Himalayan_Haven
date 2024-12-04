const express = require('express') //commonjs
const cors=require('cors')
const app = express()
const connection = require('./db/connection')
const path = require('path')
const hotelRoutes = require('./routes/hotelRoutes')

connection()
const port = 3020;
// const userRouter = require('./routes/user')
// app.use('/user', userRouter)
// Routes
app.use( hotelRoutes);

app.use(cors())
app.use(express.json())
app.listen(port, ()=>{
    console.log("server is started in port" + port)
})