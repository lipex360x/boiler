import Transaction from '@modules/transactions/infra/typeorm/entities/Transaction.entity'

export interface CreateProps {
    title: string
    type: string
    category: string
    amount: number
}

export interface FindByIdProps {
  id: string
}

export interface UpdateProps {
  transaction: Transaction
}

export interface DeleteProps {
  id: string
}

export default interface Itransactions {
  create(data: CreateProps): Promise<Transaction>
  findById(data: FindByIdProps): Promise<Transaction>
  findAll(): Promise<Transaction[]>
  update(data: UpdateProps): Promise<Transaction>
  delete(data: DeleteProps): Promise<Transaction>
}
