const User = require('../models/user')	

module.exports = {

  async create(request, response) {
    try {
      const email = request.body.email
      const user = await User.findOne({ email })

      if (user)
        return response.status(400).json({ 'message': 'User already exists' })

      const newUser = await User.create(request.body)
      newUser.password = undefined

      return response.status(201).json(newUser)
    } catch (error) {
      return response.status(400).json(error)
    }
  },

  async updateById(request, response) {
    try {
      const userId = request.body.id
      const currentUser = await User.findById(userId)

      if (!currentUser)
        return response.status(404).json({ 'message': 'Not Found' })

      await currentUser.updateOne(request.body)
          
      const updatedUser = await User.findById(userId)

      return response.status(200).json(updatedUser)
    } catch (error) {
      return response.status(400).json(error)
    }
  }
  
}