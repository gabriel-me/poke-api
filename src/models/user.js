const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const Schema = mongoose.Schema

const UserSchema = new Schema({
	name: {
		type: String,
		trim: true,		
		required: true
	},
	lastName: {
		type: String,
		trim: true,
		required: true
	},
	email: {
		type: String,
		trim: true,
		index: true,
		required: true
	},
	password: {
		type: String,
		trim: true,
		required: true,
		select: false
	},
	createAt: {
		type: Date,
		default: Date.now
	}
})

UserSchema.pre('save', async function (next) {
	const hash = await bcrypt.hash(this.password, 10)
	this.password = hash
	next()
})

module.exports = mongoose.model('User', UserSchema)