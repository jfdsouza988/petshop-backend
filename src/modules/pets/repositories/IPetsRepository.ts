import { Pet } from '@prisma/client'
import { IRegisterPetDTO } from '../dtos/IRegisterPetDTO'

interface IPetsRepository {
  create: (data: IRegisterPetDTO) => Promise<Pet>
}

export { IPetsRepository }
