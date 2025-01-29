"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface Payment {
  name: string;
  payment_method: string;
  amount: number;
  currency: string;
  description: string;
  protocol?: string;
}

interface CreatePaymentContextProps {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  formData: Payment;
  setFormData: React.Dispatch<React.SetStateAction<Payment>>;
  resetFormData: () => void;
}

const CreatePaymentContext = createContext<
  CreatePaymentContextProps | undefined
>(undefined);

export const CreatePaymentProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const [formData, setFormData] = useState<Payment>({
    name: "",
    payment_method: "Bank Account",
    amount: 0,
    currency: "USD",
    description: "",
    protocol: "",
  });

  const resetFormData = () => {
    setFormData({
      name: "",
      payment_method: "Bank Account",
      amount: 0,
      currency: "USD",
      description: "",
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
      "useCreatePayment must be used within a useCreatePaymentProvider"
    );
  }
  return context;
};
