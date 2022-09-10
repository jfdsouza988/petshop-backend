import { Owner } from '@prisma/client'
import { IRegisterOwnerDTO, IUpdateOwnerDTO } from '../dtos/IRegisterOwnerDTO'

interface IOwnersRepository {
  create: (data: IRegisterOwnerDTO) => Promise<Owner>
  list: () => Promise<Owner[]>
  update: (data: IUpdateOwnerDTO) => Promise<Owner>
  findById: (id: string) => Promise<Owner | null>
  delete: (id: string) => Promise<Owner>
}

export { IOwnersRepository }
