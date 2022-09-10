import { Router } from 'express'
import { DeleteOwnerController } from '../../modules/owners/useCases/deleteOwner/DeleteOwnerController'
import { GetAllOwnersController } from '../../modules/owners/useCases/getAllOwners/GetAllOwnersController'
import { RegisterOwnerController } from '../../modules/owners/useCases/registerOwner/RegisterOwnerController'
import { UpdateOwnerController } from '../../modules/owners/useCases/updateOwner/UpdateOwnerController'

const ownersRoutes = Router()

const getAllOwnersController = new GetAllOwnersController()
const registerOwnerController = new RegisterOwnerController()
const updateOwnerController = new UpdateOwnerController()
const deleteOwnerController = new DeleteOwnerController()

ownersRoutes.get('/', getAllOwnersController.handle)
ownersRoutes.post('/', registerOwnerController.handle)
ownersRoutes.put('/:id', updateOwnerController.handle)
ownersRoutes.delete('/:id', deleteOwnerController.handle)

export { ownersRoutes }
