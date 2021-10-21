import { string, number, date } from 'yup'
import custom from './custom.validation'

const createPeople = {
  professional: custom.objectId.required().label('professionalId'),
  peopleName: string().required(),
  sex: string().required(),
  dateOfBirth: date().required(),
  phone: string().required(),
  address: string().required(),
}

const getPeoples = {
  name: string(),
  role: string(),
  sortBy: string(),
  limit: number().integer(),
  page: number().integer(),
}

const getPeople = {
  peopleId: custom.objectId.label('peopleId').required(),
}

const updatePeople = {
  peopleId: custom.objectId.label('peopleId'),
  professionalId: custom.objectId.label('ProfessionalId'),
  peopleName: string(),
  sex: string(),
  dateOfBirth: date(),
  phone: string(),
  address: string(),
}

const deletePeople = {
  peopleId: custom.objectId.label('peopleId'),
}

export default {
  createPeople,
  getPeoples,
  getPeople,
  updatePeople,
  deletePeople,
}
