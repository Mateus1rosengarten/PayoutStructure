'use client';
import { useEditPayment } from '@/context/editPaymentProvider';
import { formatDate } from '@/utils/format';
import { URL } from '@/utils/variables';
import { Box, TextField } from '@mui/material';
import axios from 'axios';
import { useEffect } from 'react';
import PaymentForm from './FormUI';
import { useModalLogic } from './modalLogic';

const ModalEdit: React.FC = () => {
  const {
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
  } = useModalLogic();
  const { modalOpen, setModalOpen, selectedPayment, trigger, setTrigger } =
    useEditPayment();

  useEffect(() => {
    if (modalOpen && selectedPayment) {
      setFormData({
        protocol: selectedPayment.protocol,
        name: selectedPayment.name,
        payment_method: selectedPayment.payment_method,
        amount: selectedPayment.amount,
        currency: selectedPayment.currency,
        description: selectedPayment.description,
      });
    }
  }, [modalOpen, selectedPayment, setFormData]);

  const cantEditFields = selectedPayment?.status === 'Success';
  const isFormValid =
    !!formData.name && !!formData.amount && formData.amount > 0;

  const handleSubmit = async () => {
    if (!isFormValid) {
      return;
    }
    setIsLoading(true);

    try {
      const response = await axios.put(URL, {
        payment: { ...formData },
      });
      if (response.status === 200) {
        setAlertOpen(true);
      } else {
        throw new Error('Failed to edit payment');
      }
    } catch (error) {
      console.error('Error');
    } finally {
      setIsLoading(false);
      setModalOpen(false);
      setTrigger((prev) => !prev);
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    resetFormData();
  };

  return (
    <>
      <PaymentForm
        alertOpen={alertOpen}
        handleCloseAlert={handleCloseAlert}
        handleCloseModal={handleCloseModal}
        handleOpenModal={modalOpen}
        formData={formData}
        handleTextFieldChange={handleTextFieldChange}
        handleDropDownChange={handleDropDownChange}
        isFormValid={isFormValid}
        cantEditFields={cantEditFields}
        disabled={cantEditFields}
        isLoading={isLoading}
        handleSubmit={handleSubmit}
        text={selectedPayment?.protocol}
        buttonLabel="Save Changes"
        extraFields={
          <Box sx={{ display: 'flex', gap: 4 }}>
            <TextField
              label={'Date'}
              disabled={true}
              sx={{ flex: 2 }}
              value={formatDate(selectedPayment?.date) + '(GMT)'}
            />

            <TextField
              label={'Status'}
              disabled={true}
              sx={{ flex: 1 }}
              value={selectedPayment?.status}
            />
          </Box>
        }
      />
    </>
  );
};

export default ModalEdit;
