export interface Payment {
  protocol: string;
  payment_date: string;
  status: string;
  amount: number;
  currency: string;
  name: string;
  payment_method: string;
  description: string;
}
