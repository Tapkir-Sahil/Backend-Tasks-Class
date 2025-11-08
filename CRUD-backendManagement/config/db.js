const mongoose = require('mongoose')

const conn = async()=>{
  try {
    await mongoose.connect('mongodb://localhost:27017/studentDB')
    console.log('DB Connecion Successfull')
  } catch (error) {
    console.log('DB Connection Failed')
  }
}

conn();

module.exports = {conn}