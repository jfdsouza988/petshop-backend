import { Router } from 'express'
import { ownersRoutes } from './owners.routes'
import { petsRoutes } from './pets.routes'

const router = Router()

router.use('/pets', petsRoutes)
router.use('/owners', ownersRoutes)

export { router }
