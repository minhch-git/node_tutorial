import { string, number, mixed } from 'yup'
import custom from './custom.validation'

const createUser = {
  email: string().required().email(),
  password: custom.password,
  name: string().required(),
  role: mixed().oneOf(['user', 'admin']).required(),
}

const getUsers = {
  name: string(),
  role: string(),
  sortBy: string(),
  limit: number().integer(),
  page: number().integer(),
}

const getUser = {
  userId: custom.objectId.label('userId'),
}

const updateUser = {
  userId: custom.objectId.label('userId'),
  email: string().email(),
  password: custom.password,
  name: string(),
  role: string(),
}

const deleteUser = {
  userId: custom.objectId.label('userId'),
}

export default {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
}
