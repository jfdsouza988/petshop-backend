import { container } from 'tsyringe'
import { PetsRepository } from '../../modules/pets/repositories/implementations/PetsRepository'
import { IPetsRepository } from '../../modules/pets/repositories/IPetsRepository'

container.registerSingleton<IPetsRepository>(
  'PetsRepository',
  PetsRepository
)
