import { Router } from 'express'
import { GetAllPetsController } from '../../modules/pets/useCases/getAllPets/GetAllPetsController'
import { RegisterPetController } from '../../modules/pets/useCases/registerPet/RegisterPetController'
import { UpdatePetController } from '../../modules/pets/useCases/updatePet/UpdatePetController'

const petsRoutes = Router()

const getAllPetsController = new GetAllPetsController()
const registerPetController = new RegisterPetController()
const updatePetController = new UpdatePetController()

petsRoutes.get('/', getAllPetsController.handle)
petsRoutes.post('/', registerPetController.handle)
petsRoutes.put('/:id', updatePetController.handle)

export { petsRoutes }
