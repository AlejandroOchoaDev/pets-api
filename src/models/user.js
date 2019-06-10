const { Schema, model } = require('mongoose')

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 100
  },

  name: {
    type: String,
    minlength: 3,
    maxlength: 20,
    required: true
  },

  lastName: {
    type: String,
    minlength: 3,
    maxlength: 20,
    required: true
  },

  age: {
    type: Number,
    min: 18,
    requerid: true
  },

  password: {
    type: String,
    requerid: true,
    minlength: '1'
  },

  type: {
    type: String,
    default: 'adopter',
    enum: [
      'admin',
      'adopter'
    ]
  },

  address: {
    type: String,
    required: true,
    maxlength: 200
  },

  phone: {
    type: String,
    required: true,
    pattern: /^[0-9]{8,12}/

  }
})

module.exports = {
  Schema: userSchema,
  model: model('user', userSchema)
}
