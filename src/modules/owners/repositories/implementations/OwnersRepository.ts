import { Owner } from '@prisma/client'
import { prisma } from '../../../../database/prismaClient'
import { IRegisterOwnerDTO, IUpdateOwnerDTO } from '../../dtos/IRegisterOwnerDTO'
import { IOwnersRepository } from '../IOwnersRepository'

class OwnersRepository implements IOwnersRepository {
  async findById (id: string): Promise<Owner | null> {
    const owner = await prisma.owner.findUnique({
      where: {
        id
      }
    })
    return owner
  }

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

  async update (data: IUpdateOwnerDTO): Promise<Owner> {
    const owner = await prisma.owner.update({
      where: {
        id: data.id
      },
      data: {
        name: data.name,
        phone: data.phone,
        address: data.address
      }
    })
    return owner
  }

  async delete (id: string): Promise<Owner> {
    const owner = await prisma.owner.delete({
      where: {
        id
      }
    })
    return owner
  }
}

export { OwnersRepository }
