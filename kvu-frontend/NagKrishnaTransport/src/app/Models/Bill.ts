import { LR } from './LR'

export class Bill {
    billNo: String
    companyName: String
    billAmount: String
    billDate: String
    dueDate: String
    lrList: LR[]
    isPending: boolean
    isDue: boolean
}