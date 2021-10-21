import express from 'express'
import validate from '../../middleware/validate'
import companyValidation from '../../validations/company.validation'
import CompanyCtrl from '../../controllers/company.controller'
import asyncHandler from '../../utils/asyncHandler'

const router = express.Router()

router
  .route('/')
  .post(
    validate(companyValidation.createCompany),
    asyncHandler(CompanyCtrl.createCompany)
  )
  .get(
    validate(companyValidation.getCompanies),
    asyncHandler(CompanyCtrl.getCompanies)
  )

router
  .route('/:companyId')
  .get(
    validate(companyValidation.getCompany),
    asyncHandler(CompanyCtrl.getCompany)
  )
  .patch(
    validate(companyValidation.updateCompany),
    asyncHandler(CompanyCtrl.updateCompany)
  )
  .delete(
    validate(companyValidation.deleteCompany),
    asyncHandler(CompanyCtrl.deleteCompany)
  )

export default router
