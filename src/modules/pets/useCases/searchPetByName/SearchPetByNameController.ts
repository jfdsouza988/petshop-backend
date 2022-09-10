import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { SearchPetByNameUseCase } from './SearchPetByNameUseCase'

export class SearchPetByNameController {
  async handle (request: Request, response: Response): Promise<Response> {
    const { name } = request.query
    const searchPetByNameUseCase = container.resolve(SearchPetByNameUseCase)
    const result = await searchPetByNameUseCase.execute(String(name))
    return response.json(result)
  }
}
