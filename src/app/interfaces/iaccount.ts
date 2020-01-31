import { ITransaction } from './itransaction';
export interface IAccount {

  accountName: string;
  accountNumber: string;
  recurringTransaction: string;
  transactons: ITransaction[];

}
