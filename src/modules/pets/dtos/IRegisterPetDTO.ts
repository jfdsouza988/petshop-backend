export interface IPet {
  id: string
  name: string
  breed: string
  age: number
  owner: any
  type: string
}

export interface IRegisterPetDTO extends Omit<IPet, 'id'> {}
export interface IUpdatePetDTO extends Omit<IPet, 'owner'> {}
