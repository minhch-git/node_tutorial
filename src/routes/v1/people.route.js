import express from 'express'
import validate from '../../middleware/validate'
import peopleValidation from '../../validations/people.validation'
import PeopleCtrl from '../../controllers/people.controller'
import asyncHandler from '../../utils/asyncHandler'

const router = express.Router()

router
  .route('/')
  .post(
    validate(peopleValidation.createPeople),
    asyncHandler(PeopleCtrl.createPeople)
  )
  .get(
    validate(peopleValidation.getPeoples),
    asyncHandler(PeopleCtrl.getPeoples)
  )

router
  .route('/:peopleId')
  .get(validate(peopleValidation.getPeople), asyncHandler(PeopleCtrl.getPeople))
  .patch(
    validate(peopleValidation.updatePeople),
    asyncHandler(PeopleCtrl.updatePeople)
  )
  .delete(
    validate(peopleValidation.deletePeople),
    asyncHandler(PeopleCtrl.deletePeople)
  )

export default router
