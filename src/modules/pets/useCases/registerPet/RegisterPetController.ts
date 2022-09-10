import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { RegisterPetUseCase } from './RegisterPetUseCase'

export class RegisterPetController {
  async handle (request: Request, response: Response): Promise<Response> {
    const { name, breed, age, ownerId, type } = request.body
    const registerPetUseCase = container.resolve(RegisterPetUseCase)
    const result = await registerPetUseCase.execute({ name, breed, age, ownerId, type })
    return response.status(201).json(result)
  }
}
