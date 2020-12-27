const mongoose = require('mongoose')
const users = require('./data/users')
const User = require('./models/User')
const connectDB = require('./config/db')

connectDB();


const importData = async () => {
  try {

    const createdUsers = await User.insertMany(users)

    console.log('Data Imported!')
    console.log(createdUsers)
    process.exit()
  } catch (error) {
    console.error(`${error}`)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}