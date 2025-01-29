"use client"
import { createContext, ReactNode, useContext, useState } from "react";


interface Payment {
  name: string;
  protocol: string;
  payment_method:string;
  amount: number;
  currency: string;
  description: string;
  payment_date: string;
  status: string;
}

interface EditPaymentContextProps {
   
    modalOpen: boolean;
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    selectedPayment: Payment | null;
    setSelectedPayment: (payment: Payment | null) => void;
 
  }

  

export const EditPaymentContext = createContext<EditPaymentContextProps | undefined>(undefined);

const EditPaymentProvider = ({children} : {children:ReactNode}) => {

    const [modalOpen,setModalOpen] = useState<boolean>(false);
    const [selectedPayment, setSelectedPayment] = useState<Payment | null>(null);

    
   

    return (
        <EditPaymentContext.Provider value={{modalOpen,setModalOpen,selectedPayment,setSelectedPayment}}> 

            {children}
        </EditPaymentContext.Provider>
    )


};

export const useEditPayment = () => {
    const context = useContext(EditPaymentContext);
    if (!context) {
      throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
  };

export default EditPaymentProvider;
