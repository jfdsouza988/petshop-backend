import { inject, injectable } from 'tsyringe'
import { IPetsRepository } from '../../repositories/IPetsRepository'

interface IRequest {
  name: string
  breed: string
  age: number
  ownerId: string
  type: string
}

@injectable()
class RegisterPetUseCase {
  constructor (
    @inject('PetsRepository')
    private readonly petsRepository: IPetsRepository
  ) {}

  async execute ({ name, breed, age, ownerId, type }: IRequest) {
    const pet = await this.petsRepository.create({
      name,
      breed,
      age,
      ownerId,
      type
    })

    return pet
  }
}

export { RegisterPetUseCase }
