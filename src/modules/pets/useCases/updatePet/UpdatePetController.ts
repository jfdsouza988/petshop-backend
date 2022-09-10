import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { UpdatePetUseCase } from './UpdatePetUseCase'

export class UpdatePetController {
  async handle (request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    const { name, breed, age, type } = request.body
    const updatePetUseCase = container.resolve(UpdatePetUseCase)
    const result = await updatePetUseCase.execute({ id, name, breed, age, type })
    return response.status(200).json(result)
  }
}
