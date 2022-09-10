import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { DeleteOwnerUseCase } from './DeleteOwnerUseCase'

export class DeleteOwnerController {
  async handle (request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    const deleteOwnerUseCase = container.resolve(DeleteOwnerUseCase)
    await deleteOwnerUseCase.execute(id)
    return response.status(204).send()
  }
}
