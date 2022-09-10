import { Router } from 'express'
import { GetAllPetsController } from '../../modules/pets/useCases/getAllPets/GetAllPetsController'
import { RegisterPetController } from '../../modules/pets/useCases/registerPet/RegisterPetController'
import { SearchPetByNameController } from '../../modules/pets/useCases/searchPetByName/SearchPetByNameController'
import { UpdatePetController } from '../../modules/pets/useCases/updatePet/UpdatePetController'

const petsRoutes = Router()

const getAllPetsController = new GetAllPetsController()
const registerPetController = new RegisterPetController()
const updatePetController = new UpdatePetController()
const SearchPetController = new SearchPetByNameController()

petsRoutes.get('/', getAllPetsController.handle)
petsRoutes.get('/search', SearchPetController.handle)
petsRoutes.post('/', registerPetController.handle)
petsRoutes.put('/:id', updatePetController.handle)

export { petsRoutes }
