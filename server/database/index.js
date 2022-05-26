const mongoose = require('mongoose')
const url = 'mongodb+srv://johnatan:ZUjIilQjyoFHUEHs@desafiocluster.dyzp3.mongodb.net/?retryWrites=true&w=majority'
//ZUjIilQjyoFHUEHs


mongoose.connect(url, { 
  useNewUrlParser: true,
  useUnifiedTopology: true
})

module.exports = mongoose