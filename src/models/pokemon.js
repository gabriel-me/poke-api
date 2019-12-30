const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	number: {
		type: Number,
		required: true,
	},
	color: {
		type: String,
		required: true
	},
	height: {
		type: Number,
		required: true
	},
	weight: {
		type: Number,
		required: true
	},
	avatar_url: {
		type: String,
		required: false
	},
	description: {
		type: String,
		required: false
	},
	attack: {
		type: Number,
		required: false
	},
	defense: {
		type: Number,
		required: false
	},
	speed: {
		type: Number,
		required: false
	},
	specialAttack: {
		type: Number,
		required: false
	},
	specialDefense: {
		type: Number,
		required: false
	},
	hp: {
		type: Number,
		required: false
	},
	type: [{
		type: String,
		required: false
	}],
	abilities: [{ 
		name: String,
		force: Number,
		description: String,
	}]
})

module.exports = mongoose.model('Pokemon', UserSchema)