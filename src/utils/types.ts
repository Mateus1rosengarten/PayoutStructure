export interface Payment {
  protocol: string;
  date: string;
  status: string;
  amount: number;
  currency: string;
  name: string;
  payment_method: string;
  description: string;
}
