import PayoutsTable from "@/components/table";
import { useCreatePayment } from "@/context/createPayment";
import axios from "axios";
import {format} from 'date-fns'
import { useEffect, useState } from "react";






interface Payment {
  id:string;
  amount: number;
  currency:string;
  payment_date: string;
  status: string;
  protocol: string;
}


const PayoutsDashboard : React.FC = () => {

  const [payments,setPayments] = useState<Payment[]>([])
  const {formData} = useCreatePayment();

    useEffect(() => {
        fetchPayments();
      }, [formData]);

      const fetchPayments = async () => {
        try {
          const response = await axios.get("http://localhost:3000/api/payments");
          const formattedPayment = response.data.payments.map((payment:any) => ({
            ...payment,
            payment_date: format(new Date(payment.payment_date) , 'dd/MM/yyyy')
          }))
          setPayments(formattedPayment)
        } catch (error) {
          console.error("Error fetching payments:", error);
        }
      };

    return(
        
        <PayoutsTable transactions={payments} />
        
    );

};

export default PayoutsDashboard;