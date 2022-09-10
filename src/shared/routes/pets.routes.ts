import { Router } from 'express'
import { RegisterPetController } from '../../modules/pets/useCases/registerPet/RegisterPetController'
import { UpdatePetController } from '../../modules/pets/useCases/updatePet/UpdatePetController'

const petsRoutes = Router()

const registerPetController = new RegisterPetController()
const updatePetController = new UpdatePetController()

petsRoutes.post('/', registerPetController.handle)
petsRoutes.put('/:id', updatePetController.handle)

export { petsRoutes }
