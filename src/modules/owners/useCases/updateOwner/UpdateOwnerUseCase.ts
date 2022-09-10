import { inject, injectable } from 'tsyringe'
import { AppError } from '../../../../shared/errors/AppError'
import { IOwnersRepository } from '../../repositories/IOwnersRepository'

@injectable()
class UpdateOwnerUseCase {
  constructor (
    @inject('OwnersRepository')
    private readonly ownersRepository: IOwnersRepository
  ) {}

  async execute ({ id, name, phone, address }) {
    const owner = await this.ownersRepository.findById(id)
    if (!owner) {
      throw new AppError('Owner not found')
    }
    owner.name = name
    owner.phone = phone
    owner.address = address
    return await this.ownersRepository.update(owner)
  }
}

export { UpdateOwnerUseCase }
