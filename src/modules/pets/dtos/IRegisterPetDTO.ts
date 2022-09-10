export interface IPet {
  id: string
  name: string
  breed: string
  age: number
  ownerId: string
  type: string
}

export interface IRegisterPetDTO extends Omit<IPet, 'id'> {}
export interface IUpdatePetDTO extends Omit<IPet, 'ownerId'> {}
