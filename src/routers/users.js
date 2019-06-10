const express = require('express')
const user = require('../usecases/user')

const router = express.Router()

router.post('/', (req, res) => {
  try {
    const newUserData = req.body
    const newUser = user.singUp(newUserData)
    res.json({
      success: true,
      messege: 'nuevo usuario creado',
      payload: {
        user: newUser
      }
    })
  } catch (error) {
    console.error('ERROR:', error)
    res.status(400)
    res.json({
      success: false,
      messege: 'cannot create user',
      error: error.messege
    })
  }
})

router.get('/', async (req, res) => {
  try {
    const allUser = await user.getAll()
    res.json({
      success: true,
      messege: 'All user',
      payload: {
        user: allUser
      }

    })
  } catch (error) {
    console.error('ERROR:', error)
    res.status(400)
    res.json({
      success: false,
      messege: 'cannot geted user',
      error: error.messege
    })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const foundUser = await user.getById(id)
    res.json({
      success: true,
      messege: 'user found',
      payload: {
        user: foundUser
      }
    })
  } catch (error) {
    console.error(error)
    res.status(404)
    res.json({
      success: false,
      message: 'user not found',
      error: error.message
    })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const deleteUser = await user.deleteById(id)
    res.json({
      success: true,
      message: 'user delate',
      payload: {
        user: deleteUser
      }
    })
  } catch (error) {
    console.error(error)
    res.status(404)
    res.json({
      success: false,
      message: 'user not found',
      error: error.message
    })
  }
})

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const newUserData = req.body
    const updateUser = await user.updateById(id, newUserData)
    res.json({
      success: true,
      message: 'user update',
      payload: {
        user: updateUser
      }
    })
  } catch (error) {
    console.error(error)
    res.status(400)
    res.json({
      success: false,
      message: 'user not update',
      error: error.message
    })
  }
})

module.exports = router
