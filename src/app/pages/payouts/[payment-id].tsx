import { Close } from "@mui/icons-material";
import { Box, IconButton, Modal, Typography } from "@mui/material";
import { useState } from "react";

const PaymentItem:React.FC = () => {

    const [open,setIsOpen] = useState<boolean>(true);

    const handleClose = () => {
        console.log('modal closed')
        setIsOpen(false);
    
       }
    return(
        <Modal
        className="flex flex-col p-20"
        open={open}
        onClose={handleClose}>
            <Box className='relative sm:p-20 flex flex-col gap-y-8  m-auto z-1000 w-1/3 h-full bg-white rounded'>
            <IconButton 
            aria-label="close"
            onClick={handleClose}
            sx={(theme) => ({
                position: 'absolute',
                right: 16,
                top: 16,
                color: theme.palette.grey[500],
              })}> 
                <Close 
                 />
            </IconButton>
            <Typography sx={{fontWeight:600,fontSize:"1.3em"}} className="text-center">
                   PY-01
                </Typography>

            </Box>

        </Modal>
    
    );
};

export default PaymentItem;