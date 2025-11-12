const mongoose = require('mongoose');

const conn = async()=>{
  try {
    await mongoose.connect('mongodb://localhost:27017/newdb')
    console.log('connection DB success')
  } catch (error) {
    console.log(error)
  }
}

conn()
module.exports = {conn}