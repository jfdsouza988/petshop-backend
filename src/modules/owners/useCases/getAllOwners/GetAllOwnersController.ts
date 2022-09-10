import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { GetAllOwnersUseCase } from './GetAllOwnersUseCase'

export class GetAllOwnersController {
  async handle (request: Request, response: Response): Promise<Response> {
    const getAllOwnersUseCase = container.resolve(GetAllOwnersUseCase)
    const result = await getAllOwnersUseCase.execute()
    return response.status(200).json(result)
  }
}
