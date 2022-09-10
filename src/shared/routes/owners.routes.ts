import { Router } from 'express'
import { GetAllOwnersController } from '../../modules/owners/useCases/getAllOwners/GetAllOwnersController'
import { RegisterOwnerController } from '../../modules/owners/useCases/registerOwner/RegisterOwnerController'

const ownersRoutes = Router()

const getAllOwnersController = new GetAllOwnersController()
const registerOwnerController = new RegisterOwnerController()

ownersRoutes.get('/', getAllOwnersController.handle)
ownersRoutes.post('/', registerOwnerController.handle)

export { ownersRoutes }
