import { string, number, date } from 'yup'
import custom from './custom.validation'

const createCompany = {
  name: string().required(),
  address: string().required(),
}

const getCompanies = {
  name: string(),
  role: string(),
  sortBy: string(),
  limit: number().integer(),
  page: number().integer(),
}

const getCompany = {
  companyId: custom.objectId.label('companyId').required(),
}

const updateCompany = {
  companyId: custom.objectId.label('companyId').required(),
  name: string(),
  address: string(),
}

const deleteCompany = {
  companyId: custom.objectId.label('companyId').required(),
}

export default {
  createCompany,
  getCompanies,
  getCompany,
  updateCompany,
  deleteCompany,
}
