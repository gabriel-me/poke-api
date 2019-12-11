const jwt = require('jsonwebtoken')

module.exports = (request, response, next) => {
  const bearerToken = request.headers['authorization']
    
  if (bearerToken) {
    jwt.verify(bearerToken, 'secretkey', (error, success) => {
      if (success) {
        next()
        return
      }
        
      return response.status(401).json(error)
    })
  } else {
    return response.sendStatus(401)
  } 
}