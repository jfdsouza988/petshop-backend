import { inject, injectable } from 'tsyringe'
import { IPetsRepository } from '../../repositories/IPetsRepository'

@injectable()
class SearchPetByNameUseCase {
  constructor (
    @inject('PetsRepository')
    private readonly petsRepository: IPetsRepository
  ) {}

  async execute (name: string) {
    const pets = await this.petsRepository.findByName(name)
    return pets
  }
}

export { SearchPetByNameUseCase }
