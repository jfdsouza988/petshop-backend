import { inject, injectable } from 'tsyringe'
import { IPetsRepository } from '../../repositories/IPetsRepository'

@injectable()
class GetAllPetsUseCase {
  constructor (
    @inject('PetsRepository')
    private readonly petsRepository: IPetsRepository
  ) {}

  async execute () {
    const pets = await this.petsRepository.list()
    return pets
  }
}

export { GetAllPetsUseCase }
