import { Box, Modal, Snackbar, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import PaymentForm from "./paymentForm";
import ButtonComponent from "./button";
import Spinner from "./spinner";
import { useEditPayment } from "@/context/editPayment";
import { useCreatePayment } from "@/context/createPayment";
import axios from "axios";
import {CheckCircleOutline, ErrorOutlined } from "@mui/icons-material";
import { formatDate } from "@/utils/format";
import { box, warningIcon } from "@/utils/customStyles";

const ModalEdit: React.FC = () => {
  const { modalOpen, setModalOpen, selectedPayment ,} = useEditPayment();
  const { formData,setFormData,resetFormData } = useCreatePayment();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [alertOpen, setAlertOpen] = useState(false);

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

  const handleEditButton = async () => {
    setIsLoading(true);
    console.log(formData);

    try {
      console.log('protocol no front',selectedPayment?.protocol)
      const response = await axios.put(`http://localhost:3000/api/payments`,{
        payment:{...formData}
      })
  
    console.log('response edit',response);
      setAlertOpen(true) 
    } catch (error) {
      console.log("Error");
    } finally {
      setIsLoading(false);
      setModalOpen(false);
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    resetFormData();
  };

  const handleCloseAlert = () => {
    setAlertOpen(false)
  };


  return (
    <>
    <Snackbar
        open={alertOpen}
        onClose={handleCloseAlert}
        autoHideDuration={3000}
        message={'Payment updated,wait for confirmation...'}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      />
      <Modal
        className="flex flex-col p-6 pt-12 sm:p-20"
        open={modalOpen}
        onClose={handleCloseModal}
      >
        
          <Box
          sx={box}
          //  className="relative p-4 sm:p-12 -mt-6 flex flex-col gap-y-6 m-auto z-1000 w-full md:w-3/4 lg:w-1/2 xl:w-1/3  h-100 bg-white rounded"
           
           >
          {cantEditFields ? (<CheckCircleOutline color="success" sx={warningIcon} />)  : (<ErrorOutlined color="error" sx={warningIcon} />)}
            <PaymentForm
              text={selectedPayment?.protocol}
              handleClose={handleCloseModal}
              disabled={cantEditFields}
             
            />

            <Box className="flex gap-x-4">

              <TextField label={'Date'}  disabled={true} sx={{flex:2}} value={formatDate(selectedPayment?.payment_date) + '(GMT)'} />

              <TextField label={'Status'}  disabled={true} sx={{flex:1}} value={selectedPayment?.status}  />
            </Box>


            {!cantEditFields && <ButtonComponent
              onClick={handleEditButton}
              label="Save changes"
              customStyle={{ marginTop: "-1.5vh" }}
            />}
            {isLoading && <Spinner />}
          </Box>
        
      </Modal>
    </>
  );
};

export default ModalEdit;
