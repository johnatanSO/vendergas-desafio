const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.URL_MONGODB, { 
  useNewUrlParser: true,
  useUnifiedTopology: true
})

module.exports = mongoose