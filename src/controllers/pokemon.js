const Pokemon = require('../models/pokemon')

module.exports = {

  async getAll(request, response) {
    try {
      const pokemons = await Pokemon.find({})
      return response.status(200).json(pokemons)
    } catch (error) {
      return response.status(400).json(error)
    }
  },

  async getByName(request, response) {
    try {
      const pokemonName = request.params.name
      const selectedPokemon = await Pokemon.findOne({ name: pokemonName })

      if (!selectedPokemon) 
        return response.status(404).json({ 'message': 'Not Found' })
        
      return response.status(200).json(selectedPokemon)
    } catch (error) {
      return response.status(400).json(error)
    }
  },

  async create(request, response) {
    try {
      const newPokemon = await Pokemon.create(request.body)
      return response.status(201).json(newPokemon)
    } catch (error) {
      return response.status(400).json(error)
    }
  },

  uploadFile(request, response) {
    try {
      const file = request.file
      return response.status(201).json(file)
    } catch (error) {
      return response.status(400).json(error)
    }
  },

  async updateById(request, response) {
    try {
      const pokemonId = request.params.id
      const currentPokemon = await Pokemon.findById(pokemonId)

      if (!currentPokemon)
        return response.status(404).json({ 'message': 'Not Found' })

      await currentPokemon.updateOne(request.body)
      
      const updatedPokemon = await Pokemon.findById(pokemonId)

      return response.status(200).json(updatedPokemon)
    } catch (error) {
      return response.status(400).json(error)
    }
  },

  async deleteById(request, response) {
    try {
      const pokemonId = request.params.id
      const currentPokemon = await Pokemon.findById(pokemonId)

      if (!currentPokemon)
        return response.status(404).json({ 'message': 'Not Found' })

      await currentPokemon.remove(pokemonId)

      return response.status(200).json(currentPokemon)
    } catch (error) {
      return response.status(400).json(error) 
    }
  }

}