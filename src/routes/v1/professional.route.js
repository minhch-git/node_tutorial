import express from 'express'
import validate from '../../middleware/validate'
import professionalValidation from '../../validations/professional.validation'
import ProfessionalCtrl from '../../controllers/professional.controller'
import asyncHandler from '../../utils/asyncHandler'

const router = express.Router()

router
  .route('/')
  .post(
    validate(professionalValidation.createProfessional),
    asyncHandler(ProfessionalCtrl.createProfessional)
  )
  .get(
    validate(professionalValidation.getProfessionals),
    asyncHandler(ProfessionalCtrl.getProfessionals)
  )

router
  .route('/:professionalId')
  .get(
    validate(professionalValidation.getProfessional),
    asyncHandler(ProfessionalCtrl.getProfessional)
  )
  .patch(
    validate(professionalValidation.updateProfessional),
    asyncHandler(ProfessionalCtrl.updateProfessional)
  )
  .delete(
    validate(professionalValidation.deleteProfessional),
    asyncHandler(ProfessionalCtrl.deleteProfessional)
  )

export default router
