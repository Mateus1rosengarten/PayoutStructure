"use client";
import { Box, Modal, Snackbar } from "@mui/material";
import { useState } from "react";
import PaymentForm from "./paymentForm";
import ButtonComponent from "./button";
import Spinner from "./spinner";
import { useCreatePayment } from "@/context/createPayment";
import axios from "axios";
import { modal } from "@/utils/customStyles";

const ModalCreatePayment: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { modalOpen,setModalOpen, formData, resetFormData } = useCreatePayment();
  const [alertOpen, setAlertOpen] = useState(false);

  const isFormValid = formData.name && formData.amount;

  const handleSubmit = async () => {
    if (!isFormValid) {
      return;
    }
    setIsLoading(true);

    try {
      console.log(formData);
      const response = await axios.post(
        "/api/payments",
        { payment: formData },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        setAlertOpen(true);
      } else {
        throw new Error("Failed to create payment");
      }
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setAlertOpen(true);
    } catch (error) {
      console.log("Error");
    } finally {
      setIsLoading(false);
      handleCloseModal();
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    resetFormData();
    fetch();
  };

  const fetch = async () => {
    const resp = await axios.get("http://localhost:3000/api/payments");
  };

  const handleCloseAlert = () => {
    setAlertOpen(false);
  };

  return (
    <>
      <Snackbar
        message={"Payment made,wait for confirmation..."}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={alertOpen}
        onClose={handleCloseAlert}
        autoHideDuration={3000}
      />

      <Modal
        sx={modal}
        open={modalOpen}
        onClose={handleCloseModal}
      >
        <Box className="relative p-4 sm:p-12 -mt-6 flex flex-col gap-y-6 m-auto z-100 w-full md:w-3/4 lg:w-1/2 xl:w-1/3  h-100 bg-white rounded">
          <PaymentForm
            text="CREATE NEW PAYMENT"
            disabled={false}
            handleClose={handleCloseModal}
            
          />
          <ButtonComponent
            label="Send Payment" 
            customStyle={{ opacity: isFormValid ? 1 : 0.5 }}
            onClick={handleSubmit}
          />
          {isLoading && <Spinner />}
        </Box>
      </Modal>
    </>
  );
};

export default ModalCreatePayment;
