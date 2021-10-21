import express from 'express'
import validate from '../../middleware/validate'
import worksForValidation from '../../validations/worksFor.validation'
import WorksForCtrl from '../../controllers/worksFor.controller'
import asyncHandler from '../../utils/asyncHandler'

const router = express.Router()

router
  .route('/')
  .post(
    validate(worksForValidation.createWorksFor),
    asyncHandler(WorksForCtrl.createWorksFor)
  )
  .get(
    validate(worksForValidation.getWorksFors),
    asyncHandler(WorksForCtrl.getWorksFors)
  )

router
  .route('/:worksForId')
  .get(
    validate(worksForValidation.getWorksFor),
    asyncHandler(WorksForCtrl.getWorksFor)
  )
  .patch(
    validate(worksForValidation.updateWorksFor),
    asyncHandler(WorksForCtrl.updateWorksFor)
  )
  .delete(
    validate(worksForValidation.deleteWorksFor),
    asyncHandler(WorksForCtrl.deleteWorksFor)
  )

export default router
