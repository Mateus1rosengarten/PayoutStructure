import { Close } from "@mui/icons-material";
import {
  Box,
  IconButton,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import DropDown from "./dropDown";
import { ChangeEvent} from "react";
import { useCreatePayment } from "@/context/createPayment";
import {formatPrice, validateAmount, validateName } from "@/utils/format";
import { closeIcon,title } from "@/utils/customStyles";

interface PaymentFormProps {
  handleClose: () => void;
  text: string | undefined;
  disabled: boolean;
}

const PaymentForm: React.FC<PaymentFormProps> = ({
  handleClose,
  text,
  disabled,
}) => {

  const { formData, setFormData} = useCreatePayment();

  

  const handleTextFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    setFormData((prevData) => ({
      ...prevData,
      [name] : name === "amount" ? validateAmount(value) : value,
    }));
  };
  
  const handleDropDownChange = (e: SelectChangeEvent<string> ,id:string) => {
    setFormData((prevData) => ({
      ...prevData,
      [id]: e.target.value,
    }));
  };

  

  return (
    <>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={closeIcon}
      >
        <Close />
      </IconButton>
      <Typography
        sx={title}>
        {text}
      </Typography>

      <TextField
        label="Name"
        name="name"
        value={formData.name}
        required
        disabled={disabled}
        onChange={handleTextFieldChange}
        onInput={validateName}
        
      />

      <DropDown
        id="payment_method"
        items={["Bank Account", "Wire", "Credit Card", "Wallet"]}
        value={formData.payment_method}
        disabled={disabled}
        onChange={handleDropDownChange}
      />
      <Box className="flex gap-x-4">
        <TextField
          label="Amount"
          name="amount"
          sx={{ flex: 1 }}
          required
          disabled={disabled}     
          onChange={handleTextFieldChange}
          value={formatPrice(formData.amount)} 
        />
    <DropDown
          
          id="currency"
          items={["USD", "EU", "PLN"]}
          value={formData.currency}
          disabled={disabled}
          onChange={handleDropDownChange}
        /> 
      </Box>
      <TextField
        label="Description"
        name="description"
        value={formData.description}
        rows={4}
        multiline
        disabled={disabled}
        onChange={handleTextFieldChange}
        inputProps={{
          maxLength: 120,
        }}
      />
    </>
  );
};

export default PaymentForm;
