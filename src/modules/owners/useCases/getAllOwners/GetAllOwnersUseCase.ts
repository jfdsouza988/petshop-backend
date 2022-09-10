import { inject, injectable } from 'tsyringe'
import { IOwnersRepository } from '../../repositories/IOwnersRepository'

@injectable()
class GetAllOwnersUseCase {
  constructor (
    @inject('OwnersRepository')
    private readonly ownersRepository: IOwnersRepository
  ) {}

  async execute () {
    const owners = await this.ownersRepository.list()
    return owners
  }
}

export { GetAllOwnersUseCase }
