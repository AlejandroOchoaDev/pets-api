const express = require('express')
const pet = require('../usecases/pets')

const router = express.Router()

router.post('/', (req, res) => {
  try {
    const newPetData = req.body
    const newPet = pet.createPet(newPetData)
    res.json({
      success: true,
      messege: 'new pet create',
      payload: {
        pet: newPet
      }
    })
  } catch (error) {
    console.log('Error:', error)
    res.status(400)
    res.json({
      success: false,
      massage: 'cannot creat pet',
      error: error.messege
    })
  }
})

router.get('/', async (req, res) => {
  try {
    const allPets = await pet.getAll()
    res.json({
      success: true,
      messege: 'all pets',
      payload: {
        allPets
      }
    })
  } catch (error) {
    console.log('Error:', error)
    res.status(400)
    res.json({
      success: false,
      messege: 'cannot geted pets',
      error: error.massage
    })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const foundPet = await pet.getById(id)
    console.log(id, foundPet)
    res.json({
      success: true,
      messege: 'pets found',
      payload: {
        pet: foundPet
      }
    })
  } catch (error) {
    console.log('Error:', error)
    res.status(400)
    res.json({
      success: false,
      messege: 'pet not found',
      error: error.messege
    })
  }
})

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const petData = req.body

    const UpdatePet = await pet.updateById(id, petData)
    res.json({
      success: true,
      messege: 'pet update',
      payload: {
        pet: UpdatePet
      }
    })
  } catch (error) {
    console.error('Error:', error)
    res.status(400)
    res.json({
      success: false,
      messege: 'pet not update',
      error: error.messege
    })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const deletePet = await pet.deleteById(id)
    res.json({
      success: true,
      messege: 'pet deleted',
      payload: {
        pet: deletePet
      }
    }
    )
  } catch (error) {
    console.error('Error:', error)
    res.status(400)
    res.json({
      success: false,
      messege: 'pet not deleted',
      error: error.messege
    })
  }
})

module.exports = router
