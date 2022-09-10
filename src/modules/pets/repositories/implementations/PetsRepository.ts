import { Pet } from '@prisma/client'
import { prisma } from '../../../../database/prismaClient'
import { IRegisterPetDTO, IUpdatePetDTO } from '../../dtos/IRegisterPetDTO'
import { IPetsRepository } from '../IPetsRepository'

class PetsRepository implements IPetsRepository {
  async create (data: IRegisterPetDTO): Promise<Pet> {
    const pet = await prisma.pet.create({
      data
    })
    return pet
  }

  async update (data: IUpdatePetDTO): Promise<Pet> {
    const pet = await prisma.pet.update({
      where: {
        id: data.id
      },
      data: {
        name: data.name,
        breed: data.breed,
        age: data.age,
        type: data.type
      }
    })
    return pet
  }
}

export { PetsRepository }
