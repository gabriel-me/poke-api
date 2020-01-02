const mongoose = require('mongoose')

module.exports = {

  connect() {
    mongoose.connect(
      process.env.MONGO_URL,
      {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    )

    mongoose.Promise = global.Promise

    return mongoose
  }
  
}