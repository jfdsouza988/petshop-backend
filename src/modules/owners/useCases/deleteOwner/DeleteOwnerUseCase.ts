import { inject, injectable } from 'tsyringe'
import { AppError } from '../../../../shared/errors/AppError'
import { IOwnersRepository } from '../../repositories/IOwnersRepository'

@injectable()
class DeleteOwnerUseCase {
  constructor (
    @inject('OwnersRepository')
    private readonly ownersRepository: IOwnersRepository
  ) {}

  async execute (id: string): Promise<void> {
    const owner = await this.ownersRepository.findById(id)

    if (!owner) {
      throw new AppError('Owner not found')
    }

    await this.ownersRepository.delete(id)
  }
}

export { DeleteOwnerUseCase }
