import { string, number, date } from 'yup'
import custom from './custom.validation'

const createWorksFor = {
  company: custom.objectId.required().label('company'),
  salary: string().required(),
  dateOfJoin: date().default(() => new Date()),
}

const getWorksFors = {
  name: string(),
  role: string(),
  sortBy: string(),
  limit: number().integer(),
  page: number().integer(),
}

const getWorksFor = {
  worksForId: custom.objectId.label('worksForId').required(),
}

const updateWorksFor = {
  worksForId: custom.objectId.label('worksForId').required(),
  salary: string(),
  dateOfJoin: date(),
}

const deleteWorksFor = {
  worksForId: custom.objectId.label('worksForId').required(),
}

export default {
  createWorksFor,
  getWorksFors,
  getWorksFor,
  updateWorksFor,
  deleteWorksFor,
}
