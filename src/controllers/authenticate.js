const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require('../models/user')

module.exports = {

  async signInWithEmailAndPassword(request, response) {
    try {
      const { email, password } = request.body
      const user = await User.findOne({ email: email }).select('+password')

      if (!user)
        return response.status(404).json({ 'message': 'Invalid email' })

      const validPassword = await bcrypt.compare(password, user.password)

      if (!validPassword)
        return response.status(400).json({ 'message': 'Invalid password' })

      user.password = undefined

      jwt.sign({ user }, 'secretkey', (error, token) => {
        if (token) {
          return response.status(200).json({
            user: user,
            token: token
          })
        }

        return response.status(400).json(error)        
      })
    } catch (error) {
      return response.status(400).json(error)
    }
  }
  
}