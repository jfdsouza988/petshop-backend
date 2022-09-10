import { Owner } from '@prisma/client'
import { prisma } from '../../../../database/prismaClient'
import { IRegisterOwnerDTO } from '../../dtos/IRegisterOwnerDTO'
import { IOwnersRepository } from '../IOwnersRepository'

class OwnersRepository implements IOwnersRepository {
  async list (): Promise<Owner[]> {
    const owners = await prisma.owner.findMany()
    return owners
  }

  async create (data: IRegisterOwnerDTO): Promise<Owner> {
    const owner = await prisma.owner.create({
      data
    })
    return owner
  }
}

export { OwnersRepository }
