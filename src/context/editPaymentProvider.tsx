'use client';
import { Payment } from '@/utils/types';
import { createContext, ReactNode, useContext, useState } from 'react';

interface EditPaymentContextProps {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedPayment: Payment | null;
  setSelectedPayment: (payment: Payment | null) => void;
  trigger: boolean;
  setTrigger: React.Dispatch<React.SetStateAction<boolean>>;
}

export const EditPaymentContext = createContext<
  EditPaymentContextProps | undefined
>(undefined);

const EditPaymentProvider = ({ children }: { children: ReactNode }) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedPayment, setSelectedPayment] = useState<Payment | null>(null);
  const [trigger, setTrigger] = useState<boolean>(false);

  return (
    <EditPaymentContext.Provider
      value={{
        modalOpen,
        setModalOpen,
        selectedPayment,
        setSelectedPayment,
        trigger,
        setTrigger,
      }}
    >
      {children}
    </EditPaymentContext.Provider>
  );
};

export const useEditPayment = () => {
  const context = useContext(EditPaymentContext);
  if (!context) {
    throw new Error('useEditPayment must be used within a UseEditProvider');
  }
  return context;
};

export default EditPaymentProvider;
