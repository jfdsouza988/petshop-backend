import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { UpdateOwnerUseCase } from './UpdateOwnerUseCase'

export class UpdateOwnerController {
  async handle (request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    const { name, phone, address } = request.body
    const updateOwnerUseCase = container.resolve(UpdateOwnerUseCase)
    const result = await updateOwnerUseCase.execute({ id, name, phone, address })
    return response.status(200).json(result)
  }
}
