import { inject, injectable } from 'tsyringe'
import { IOwnersRepository } from '../../repositories/IOwnersRepository'

interface IRequest {
  name: string
  phone: string
  address: string
}

@injectable()
class RegisterOwnerUseCase {
  constructor (
    @inject('OwnersRepository')
    private readonly ownersRepository: IOwnersRepository
  ) {}

  async execute ({ name, phone, address }: IRequest) {
    const owner = await this.ownersRepository.create({ name, phone, address })
    return owner
  }
}

export { RegisterOwnerUseCase }
