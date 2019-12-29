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
	type: [{
		type: String,
		required: false
	}],
	abilities: [{
		type: String,
		required: false
	}]
})

module.exports = mongoose.model('Pokemon', UserSchema)