import { Box, Button, Modal, TextField } from "@mui/material";
import { useState } from "react";
import PaymentForm from "./paymentForm";
import ButtonComponent from "./button";
import Spinner from "./spinner";

const ModalEdit: React.FC = () => {
  const [open, setIsOpen] = useState<boolean>(true);
  const [isEditable,setIsEditable] = useState<boolean>(false);
  const [isLoading,setIsLoading] = useState<boolean>(false);

  const handleSubmit = async () => {
    setIsLoading(true);

    try {
        await new Promise((resolve) => setTimeout(resolve,2000));

    }
    catch(error) {
        console.log('Error')

    }
    finally{
        setIsLoading(false);
        setIsOpen(false);
    }
  };

  const handleClose = () => {
    console.log("modal closed");
    setIsOpen(false);
  };

  const handleEditButton = () => {
    setIsEditable(true);

  };


  return (
    <>
      <Modal className="flex flex-col p-6 pt-12 sm:p-20" open={open} onClose={handleClose}>
        <>
          <Box className="relative p-4 sm:p-12 -mt-6 flex flex-col gap-y-6 m-auto z-1000 w-full md:w-3/4 lg:w-1/2 xl:w-1/3  h-100 bg-white rounded">
            <PaymentForm
              text="PY-01"
              isEditable={isEditable}
              handleClose={handleClose}
            />
            <Box className="flex gap-x-4">
            <TextField label="Payment Date" disabled 
        
        />

            <TextField label="Status" />
            </Box>
            <ButtonComponent onClick={handleEditButton} label="Edit" disabled={isEditable}/>
            <ButtonComponent onClick={handleSubmit} label="Save changes" disabled={!isEditable} customStyle={{marginTop:'-1.5vh'}} />
            { isLoading && <Spinner />}
          </Box>
        </>
      </Modal>
    </>
  );
};

export default ModalEdit;
