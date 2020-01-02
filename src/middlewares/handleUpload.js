const multer = require('multer')

const storage = multer.diskStorage({
  destination: (request, file, callback) => {
    callback(null, 'uploads/')
  },
  filename: (request, file, callback) => {
    callback(null, `${Date.now()}-${file.originalname}`)
  }
})

module.exports = multer({ storage })