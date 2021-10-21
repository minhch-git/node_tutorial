import { string, number, date } from 'yup'
import custom from './custom.validation'

const createProfessional = {
  degree: string().required(),
  experience: string().required(),
}

const getProfessionals = {
  name: string(),
  role: string(),
  sortBy: string(),
  limit: number().integer(),
  page: number().integer(),
}

const getProfessional = {
  professionalId: custom.objectId.required().label('professionalId'),
}

const updateProfessional = {
  professionalId: custom.objectId.required().label('professionalId'),
  experience: string(),
  degree: string(),
}

const deleteProfessional = {
  professionalId: custom.objectId.required().label('professionalId'),
}

export default {
  createProfessional,
  getProfessionals,
  getProfessional,
  updateProfessional,
  deleteProfessional,
}
