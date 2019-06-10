const { model: User } = require('../models/user')
const bcrypt = require('../lib/bcrypt')

const singUp = async (userData = {}) => {
  const {
    email,
    name,
    lastName,
    age,
    password,
    type,
    address,
    phone
  } = userData

  const hash = await bcrypt.hash(password)

  const user = new User({
    email,
    name,
    lastName,
    age,
    password: hash,
    type,
    address,
    phone
  })
  const error = user.validateSync()
  if (error) throw error
  return user.save()
}

const getAll = async () => {
  const allUser = await User.find().lean()
  const cleanUsers = allUser.map((user) => {
    const { password, ...cleanUser } = user
    return cleanUser
  })
  return cleanUsers
}

const getById = async (UserId) => {
  const user = await User.findById(UserId).lean()
  const { password, ...cleanUser } = user
  return cleanUser
}

const deleteById = (userId) => User.findByIdAndDelete(userId)

const updateById = (userId, userData) => User.findByIdAndUpdate(userId, userData)

module.exports = {
  singUp,
  getAll,
  getById,
  deleteById,
  updateById
}
