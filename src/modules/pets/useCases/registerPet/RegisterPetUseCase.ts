import { inject, injectable } from 'tsyringe'
import { IPetsRepository } from '../../repositories/IPetsRepository'

interface IRequest {
  name: string
  breed: string
  age: number
  owner: any
  type: string
}

@injectable()
class RegisterPetUseCase {
  constructor (
    @inject('PetsRepository')
    private readonly petsRepository: IPetsRepository
  ) {}

  async execute ({ name, breed, age, owner, type }: IRequest) {
    const pet = await this.petsRepository.create({
      name,
      breed,
      age,
      owner,
      type
    })

    return pet
  }
}

export { RegisterPetUseCase }
