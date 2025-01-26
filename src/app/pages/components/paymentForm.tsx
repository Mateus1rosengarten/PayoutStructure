import { Close } from "@mui/icons-material";
import { Box, Button, IconButton, Modal, SelectChangeEvent, TextField, Typography } from "@mui/material";
import DropDown from "./dropDown";
import { useState } from "react";

interface PaymentFormProps {
    handleClose: () => void;
    text: string;
    isEditable: boolean;
   
  }

const PaymentForm: React.FC<PaymentFormProps> = ({
    text,
    isEditable,
    handleClose,
 
    }) => {

    const [paymentMethod,setPaymentMethod] = useState<string>('Bank Account');
    const [currency,setCurrency] = useState<string>('PLN');

    const handlePaymentMethodChange = (event: SelectChangeEvent<string>) => {
        setPaymentMethod(event.target.value);
          };
        
    const handleCurrencyChange = (event: SelectChangeEvent<string>) => {
        setCurrency(event.target.value); 
          };

    return (
                <> 
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
                        {text}
                    </Typography>
                        
                        <TextField
                        label="Name" 
                        required
                        disabled={!isEditable}/>
                       
    
                        <DropDown
                      onChange={handlePaymentMethodChange}
                      value={paymentMethod}
                        label="Payment Method"
                        items={['Bank Account', 'Wire', 'Credit Card', 'Wallet']}
        
                        />
                        <Box className="flex gap-x-4">
                        
                        
                        <TextField
                        sx={{flex:1}}
                        label="Amount"
                        type="number"
                        className="w-full"
                        required
                        disabled={!isEditable}/>
                     
    
                      
                      <DropDown
                      
                      onChange={handleCurrencyChange}
                      value={currency}
                      label="Currency"
                      items={['USD', 'EU', 'PLN']}
                      
                      />
                     
                        </Box>
                            <TextField
                        label='Description'
                        multiline
                        rows={4}
                        disabled={!isEditable}
                 />


    
                        
    
    
    
           </> 
    
          
        
    
        );
};

export default PaymentForm;