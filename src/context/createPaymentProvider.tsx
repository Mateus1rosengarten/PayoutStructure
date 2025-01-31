'use client';
import { Payment } from '@/utils/types';
import React, {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useState,
} from 'react';

interface CreatePaymentContextProps {
  modalOpen: boolean;
  setModalOpen: Dispatch<React.SetStateAction<boolean>>;
  formData: Partial<Payment>;
  setFormData: Dispatch<React.SetStateAction<Partial<Payment>>>;
  resetFormData: () => void;
}

const CreatePaymentContext = createContext<
  CreatePaymentContextProps | undefined
>(undefined);

export const CreatePaymentProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [formData, setFormData] = useState<Partial<Payment>>({
    name: '',
    payment_method: 'Bank Account',
    amount: 0,
    currency: 'USD',
    description: '',
    protocol: '',
  });

  const resetFormData = () => {
    setFormData({
      name: '',
      payment_method: 'Bank Account',
      amount: 0,
      currency: 'USD',
      description: '',
    });
  };

  return (
    <CreatePaymentContext.Provider
      value={{ modalOpen, setModalOpen, formData, setFormData, resetFormData }}
    >
      {children}
    </CreatePaymentContext.Provider>
  );
};

export const useCreatePayment = (): CreatePaymentContextProps => {
  const context = useContext(CreatePaymentContext);
  if (!context) {
    throw new Error(
      'useCreatePayment must be used within a useCreatePaymentProvider'
    );
  }
  return context;
};
