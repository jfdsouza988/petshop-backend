import { Owner } from '@prisma/client'
import { IRegisterOwnerDTO } from '../dtos/IRegisterOwnerDTO'

interface IOwnersRepository {
  create: (data: IRegisterOwnerDTO) => Promise<Owner>
  list: () => Promise<Owner[]>
}

export { IOwnersRepository }
