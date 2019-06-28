const { Schema, model } = require('mongoose')

const petSchema = new Schema({
  name: {
    type: String,
    minlength: 3,
    maxlength: 20,
    required: true
  },

  ageInMonths: {
    type: Number,
    min: 1,
    required: true
  },

  size: {
    type: String,
    enum: [
      'small',
      'medium',
      'large'
    ],
    required: true
  },

  species: {
    type: String,
    required: true
  },

  breed: {
    type: String,
    pattern: /^[a-zA-Z]{2,50}/
  },

  description: {
    type: String,
    maxlength: 300
  },

  photo: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 300
  },

  isAdopted: {
    type: Boolean,
    default: false
  },

  userId: {
    type: String,
    required: true
  },

  odopterUserId: {
    type: String
  }

})

module.exports = {
  Schema: petSchema,
  model: model('Pets', petSchema)
}
