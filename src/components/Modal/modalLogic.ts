import { useCreatePayment } from '@/context/createPaymentProvider';
import { validateAmount } from '@/utils/format';
import { SelectChangeEvent } from '@mui/material';
import { ChangeEvent, useState } from 'react';

export const useModalLogic = () => {
  const { formData, setFormData, resetFormData } = useCreatePayment();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [alertOpen, setAlertOpen] = useState(false);

  const handleTextFieldChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'amount' ? validateAmount(value) : value,
    }));
  };

  const handleDropDownChange = (e: SelectChangeEvent<string>, id: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [id]: e.target.value,
    }));
  };

  const handleCloseAlert = () => {
    setAlertOpen(false);
  };

  return {
    formData,
    setFormData,
    resetFormData,
    isLoading,
    setIsLoading,
    alertOpen,
    setAlertOpen,
    handleTextFieldChange,
    handleDropDownChange,
    handleCloseAlert,
  };
};
