import { Pet } from '@prisma/client'
import { IRegisterPetDTO, IUpdatePetDTO } from '../dtos/IRegisterPetDTO'

interface IPetsRepository {
  create: (data: IRegisterPetDTO) => Promise<Pet>
  update: (data: IUpdatePetDTO) => Promise<Pet>
  list: () => Promise<Pet[]>
}

export { IPetsRepository }
