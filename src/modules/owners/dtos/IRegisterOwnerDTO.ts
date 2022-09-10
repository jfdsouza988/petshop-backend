import { IPet } from '../../pets/dtos/IRegisterPetDTO'

export interface IOwner {
  id: string
  name: string
  phone: string
  address: string
  pets: IPet[]
}

export interface IRegisterOwnerDTO extends Omit<IOwner, 'id' | 'pets'> {}
export interface IUpdateOwnerDTO extends Omit<IOwner, 'pets'> {}
