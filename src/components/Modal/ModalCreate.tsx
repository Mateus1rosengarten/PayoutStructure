'use client';
import { useCreatePayment } from '@/context/createPaymentProvider';
import { useEditPayment } from '@/context/editPaymentProvider';
import { URL } from '@/utils/variables';
import axios from 'axios';
import { useEffect } from 'react';
import PaymentForm from './FormUI';
import { useModalLogic } from './modalLogic';

const ModalCreatePayment: React.FC = () => {
  const {
    isLoading,
    setIsLoading,
    alertOpen,
    setAlertOpen,
    handleTextFieldChange,
    handleDropDownChange,
    handleCloseAlert,
  } = useModalLogic();

  const { modalOpen, setModalOpen, formData, resetFormData } =
    useCreatePayment();
  const { trigger, setTrigger } = useEditPayment();
  const isFormValid =
    !!formData.name && !!formData.amount && formData.amount > 0;

  useEffect(() => {
    resetFormData();
  }, [modalOpen]);

  const handleSubmit = async () => {
    if (!isFormValid) {
      return;
    }
    setIsLoading(true);

    try {
      const response = await axios.post(
        URL,
        { payment: formData },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      if (response.status === 200) {
        setAlertOpen(true);
      } else {
        throw new Error('Failed to create payment');
      }
    } catch (error) {
      console.error('Error');
    } finally {
      setIsLoading(false);
      handleCloseModal();
      setTrigger(!trigger);
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <PaymentForm
        alertOpen={alertOpen}
        handleCloseAlert={handleCloseAlert}
        isLoading={isLoading}
        handleOpenModal={modalOpen}
        handleCloseModal={handleCloseModal}
        formData={formData}
        handleTextFieldChange={handleTextFieldChange}
        handleDropDownChange={handleDropDownChange}
        isFormValid={isFormValid}
        extraFields={false}
        disabled={false}
        handleSubmit={handleSubmit}
        text="CREATE NEW PAYMENT"
        buttonLabel="SEND PAYMENT"
      />
    </>
  );
};

export default ModalCreatePayment;
