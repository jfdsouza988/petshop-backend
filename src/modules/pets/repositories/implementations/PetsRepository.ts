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

  async list (): Promise<Pet[]> {
    const pets = await prisma.pet.findMany({
      include: {
        owner: true
      }
    })
    return pets
  }

  async findByName (name: string): Promise<Pet[]> {
    const pets = await prisma.pet.findMany({
      where: {
        name: {
          contains: name
        }
      },
      include: {
        owner: true
      }
    })
    return pets
  }
}

export { PetsRepository }
