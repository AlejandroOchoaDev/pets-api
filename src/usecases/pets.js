const { model: Pets } = require('../models/pet')

const createPet = (petData = {}) => {
  const {
    name,
    ageInMonths,
    size,
    spacies,
    breed,
    description,
    photo,
    isAdopted,
    userId,
    odopterUserId
  } = petData

  const pet = new Pets({
    name,
    ageInMonths,
    size,
    spacies,
    breed,
    description,
    photo,
    isAdopted,
    userId,
    odopterUserId
  })
  const error = pet.validateSync()
  if (error) throw error
  return pet.save()
}

const getAll = () => Pets.find().lean()

const getById = (PetId) => Pets.findById(PetId).lean()

const deleteById = (petId) => Pets.findByIdAndDelete(petId)

const updateById = (petId, petData) => Pets.findByIdAndUpdate(petId, petData)

module.exports = {
  createPet,
  getAll,
  getById,
  deleteById,
  updateById
}
