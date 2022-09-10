import { inject, injectable } from 'tsyringe'
import { IPetsRepository } from '../../repositories/IPetsRepository'

@injectable()
class UpdatePetUseCase {
  constructor (
    @inject('PetsRepository')
    private readonly petsRepository: IPetsRepository
  ) {}

  async execute ({ id, name, breed, age, type }) {
    const pet = await this.petsRepository.update({ id, name, breed, age, type })
    return pet
  }
}

export { UpdatePetUseCase }
