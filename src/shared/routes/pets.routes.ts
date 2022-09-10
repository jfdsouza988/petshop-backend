import { Router } from 'express'
import { RegisterPetController } from '../../modules/pets/useCases/registerPet/RegisterPetController'

const petsRoutes = Router()

const registerPetController = new RegisterPetController()

petsRoutes.post('/', registerPetController.handle)

export { petsRoutes }
