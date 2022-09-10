import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { GetAllPetsUseCase } from './GetAllPetsUseCase'

export class GetAllPetsController {
  async handle (request: Request, response: Response): Promise<Response> {
    const getAllPetsUseCase = container.resolve(GetAllPetsUseCase)
    const result = await getAllPetsUseCase.execute()
    return response.status(200).json(result)
  }
}
