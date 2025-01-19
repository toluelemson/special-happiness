export interface StandingOrderModel {
  recipient: string;
  bankAccount: string;
  explanation: string;
  nextPaymentDate: string;
  validUntil: string;
  amount: number;
}
