const express = require('express')
const app = express()
const conn = require('./config/db')
const User = require('./model/userSchema')
const userRoutes = require('./routes/userRoutes')
const PORT = 3000 || process.env


app.use(express.json())

// app.get('/',(req,res)=>{
//   res.send(`hello world`)
// })

app.use('/api/users', userRoutes);

app.listen(PORT,()=>{
  console.log(`server is on http://localhost:${PORT}`)
})