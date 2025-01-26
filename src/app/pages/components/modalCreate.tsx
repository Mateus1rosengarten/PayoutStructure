"use client";
import {Box, Modal, Snackbar } from "@mui/material";
import { useState } from "react";
import PaymentForm from "./paymentForm";
import ButtonComponent from "./button";
import Spinner from "./spinner";

const ModalCreatePayment: React.FC = () => {
  const [open, setIsOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [alert, setAlert] = useState<{
    message: string;
    open: boolean;
  }>({
    message: "",
    open: false,
  });

  const handleSubmit = async () => {
    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setAlert({...alert,message:'You Payment was successful delivered',open:true});
    } catch (error) {
      console.log("Error");
      setAlert({...alert,message:'You Payment was not successful delivered',open:true});
    } finally {
      setIsLoading(false);
      setIsOpen(false);
    
    }
  };

  const handleClose = () => {
    console.log("modal closed");
    setIsOpen(false);
  };

  const handleAlertClose = () => {
    setAlert({...alert,open:false});
  };

  return (
    <>
      <Snackbar
        open={alert.open}
        onClose={handleAlertClose}
        autoHideDuration={3000}
        message={alert.message}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      />

      <Modal
        className="flex flex-col p-6 pt-14 sm:p-20"
        open={open}
        onClose={handleClose}
      >
        <Box className="relative p-4 sm:p-12 -mt-6 flex flex-col gap-y-6 m-auto z-100 w-full md:w-3/4 lg:w-1/2 xl:w-1/3  h-100 bg-white rounded">
          <PaymentForm
            text="Create new Payment"
            isEditable={true}
            handleClose={handleClose}
          />
          <ButtonComponent onClick={handleSubmit} label="Send Payment" />
          {isLoading && <Spinner />}
        </Box>
      </Modal>
    </>
  );
};

export default ModalCreatePayment;
