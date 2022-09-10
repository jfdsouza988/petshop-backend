import { Pet } from '@prisma/client'
import { prisma } from '../../../../database/prismaClient'
import { IRegisterPetDTO } from '../../dtos/IRegisterPetDTO'
import { IPetsRepository } from '../IPetsRepository'

class PetsRepository implements IPetsRepository {
  async create (data: IRegisterPetDTO): Promise<Pet> {
    const pet = await prisma.pet.create({
      data
    })
    return pet
  }
}

export { PetsRepository }
