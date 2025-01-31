'use client';
import ModalCreatePayment from '@/components/Modal/ModalCreate';
import ModalEdit from '@/components/Modal/ModalEdit';
import ButtonComponent from '@/components/ui/Button';
import { useCreatePayment } from '@/context/createPaymentProvider';
import { appTitle, container, customButtonStyle } from '@/utils/customStyles';
import { Box, Typography } from '@mui/material';
import PayoutsDashboard from '../components/Table/TableLogic';

export default function Home() {
  const { setModalOpen } = useCreatePayment();

  const handleOnClick = () => {
    setModalOpen(true);
  };

  return (
    <Box sx={container}>
      <Typography variant="h2" className="text-center" sx={appTitle}>
        Payment Dashboard
      </Typography>
      <ButtonComponent
        label="Create new Payment"
        customStyle={customButtonStyle}
        onClick={handleOnClick}
      />
      <PayoutsDashboard />
      <ModalCreatePayment />
      <ModalEdit />
    </Box>
  );
}
