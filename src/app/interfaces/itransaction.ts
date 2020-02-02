export interface ITransaction {
  amount: number;
  date: number;
  title: string;
  type: 'to' | 'from';
  recipientsAddress: string;
  isStandingOrder: boolean;
  nameOrder: string;
  recipientName: string;
  recipientSurname: string;
  accNumber: string;
}
