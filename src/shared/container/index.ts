import { container } from 'tsyringe'
import { OwnersRepository } from '../../modules/owners/repositories/implementations/OwnersRepository'
import { IOwnersRepository } from '../../modules/owners/repositories/IOwnersRepository'
import { PetsRepository } from '../../modules/pets/repositories/implementations/PetsRepository'
import { IPetsRepository } from '../../modules/pets/repositories/IPetsRepository'

container.registerSingleton<IPetsRepository>(
  'PetsRepository',
  PetsRepository
)

container.registerSingleton<IOwnersRepository>(
  'OwnersRepository',
  OwnersRepository
)
