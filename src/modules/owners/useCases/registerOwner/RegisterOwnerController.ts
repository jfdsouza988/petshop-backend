import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { RegisterOwnerUseCase } from './RegisterOwnerUseCase'

export class RegisterOwnerController {
  async handle (request: Request, response: Response): Promise<Response> {
    const { name, phone, address } = request.body
    const registerOwnerUseCase = container.resolve(RegisterOwnerUseCase)
    const result = await registerOwnerUseCase.execute({ name, phone, address })
    return response.status(201).json(result)
  }
}
