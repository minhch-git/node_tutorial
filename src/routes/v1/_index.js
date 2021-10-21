import express from 'express'
import userRoute from './user.route'
import peopleRoute from './people.route'
import worksForRoute from './worksFor.route'
import professionalRoute from './professional.route'
import companyRoute from './company.route'

const router = express.Router()

const defaultRoutes = [
  {
    path: '/peoples',
    route: peopleRoute,
  },
  {
    path: '/worksfor',
    route: worksForRoute,
  },
  {
    path: '/professionals',
    route: professionalRoute,
  },
  {
    path: '/companies',
    route: companyRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
]

defaultRoutes.forEach(route => {
  router.use(route.path, route.route)
})

export default router
