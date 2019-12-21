const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
	name: {
		type: String,
		required: true
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
	type: [{
		name: String,
		required: false
	}],
	abilities: [{
		name: String,
		required: false
	}]
})

module.exports = mongoose.model('Pokemon', UserSchema)