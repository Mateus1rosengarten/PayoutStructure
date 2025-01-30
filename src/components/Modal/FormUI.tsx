import {
  box,
  closeIcon,
  modal,
  rowBox,
  textFieldBox,
  title,
  warningIcon,
} from '@/utils/customStyles';
import { validateName } from '@/utils/format';
import { CheckCircleOutline, Close, ErrorOutline } from '@mui/icons-material';
import {
  Box,
  IconButton,
  Modal,
  Snackbar,
  TextField,
  Typography,
} from '@mui/material';
import { ReactNode } from 'react';
import ButtonComponent from '../ui/Button';
import Spinner from '../ui/Spinner';
import DropDown from './DropDownUI';

interface PaymentFormProps {
  alertOpen: boolean;
  handleCloseAlert: () => void;
  handleOpenModal: boolean;
  handleCloseModal: () => void;
  text?: string;
  disabled: boolean;
  formData: any;
  handleTextFieldChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleDropDownChange: (e: any, id: string) => void;
  extraFields?: ReactNode;
  isLoading: boolean;
  cantEditFields?: boolean;
  buttonLabel: string;
  isFormValid: boolean;
  handleSubmit: () => void;
}

const PaymentForm: React.FC<PaymentFormProps> = ({
  alertOpen,
  handleCloseAlert,
  handleOpenModal,
  handleCloseModal,
  text,
  disabled,
  formData,
  handleTextFieldChange,
  handleDropDownChange,
  extraFields,
  isLoading,
  cantEditFields,
  isFormValid,
  buttonLabel,
  handleSubmit,
}) => {
  return (
    <>
      <Snackbar
        open={alertOpen}
        onClose={handleCloseAlert}
        autoHideDuration={3000}
        message={'Success , wait for confirmation...'}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      />

      <Modal sx={modal} open={handleOpenModal} onClose={handleCloseModal}>
        <Box sx={box}>
          <IconButton
            aria-label="close"
            onClick={handleCloseModal}
            sx={closeIcon}
          >
            <Close />
          </IconButton>
          {extraFields &&
            (cantEditFields ? (
              <CheckCircleOutline color="success" sx={warningIcon} />
            ) : (
              <ErrorOutline color="error" sx={warningIcon} />
            ))}

          <Typography sx={title}>{text}</Typography>

          <TextField
            required
            label="Name"
            name="name"
            value={formData.name}
            disabled={disabled}
            onChange={handleTextFieldChange}
            onInput={validateName}
          />

          <DropDown
            id="payment_method"
            items={['Bank Account', 'Wire', 'Credit Card', 'Wallet']}
            value={formData.payment_method}
            disabled={disabled}
            onChange={handleDropDownChange}
          />
          <Box sx={rowBox}>
            <TextField
              label="Amount"
              name="amount"
              required
              sx={textFieldBox}
              disabled={disabled}
              onChange={handleTextFieldChange}
              value={formData.amount}
            />
            <DropDown
              id="currency"
              items={['USD', 'EU', 'PLN']}
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

          {extraFields}
          {!cantEditFields && (
            <ButtonComponent
              onClick={handleSubmit}
              label={buttonLabel}
              customStyle={{
                marginTop: '-1vh',
                opacity: isFormValid ? 1 : 0.5,
              }}
            />
          )}
          {isLoading && <Spinner />}
        </Box>
      </Modal>
    </>
  );
};

export default PaymentForm;
