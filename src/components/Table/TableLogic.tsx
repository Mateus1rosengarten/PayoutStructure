import { useCreatePayment } from '@/context/createPaymentProvider';
import { useEditPayment } from '@/context/editPaymentProvider';
import { getStatus, tableCell, tableProtocol } from '@/utils/customStyles';
import { formatPrice } from '@/utils/format';
import { Payment } from '@/utils/types';
import { URL } from '@/utils/variables';
import { MoreHoriz } from '@mui/icons-material';
import { IconButton, TableCell, TableRow } from '@mui/material';
import axios from 'axios';
import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import TableUI from './TableUI';

const PayoutsDashboard: React.FC = () => {
  const [payments, setPayments] = useState<Payment[]>([]);
  const { setModalOpen, setSelectedPayment, trigger, setTrigger } =
    useEditPayment();

  const { formData } = useCreatePayment();

  useEffect(() => {
    fetchPayments();
  }, [formData]);

  useEffect(() => {
    if (trigger) {
      triggerRefresh(fetchPayments);
    }
  }, [trigger]);

  const renderHeader = () => {
    return (
      <TableRow>
        <TableCell sx={tableCell}>Protocol</TableCell>
        <TableCell sx={tableCell}>Date</TableCell>
        <TableCell sx={tableCell}>Status</TableCell>
        <TableCell sx={tableCell}>Amount</TableCell>
        <TableCell sx={tableCell}>Details</TableCell>
      </TableRow>
    );
  };

  const renderItem = (payment: Payment) => {
    return (
      <TableRow key={payment.protocol}>
        <TableCell sx={tableProtocol}>{payment.protocol}</TableCell>
        <TableCell sx={getStatus(payment.status)}>
          {payment.payment_date}
        </TableCell>
        <TableCell sx={getStatus(payment.status)}>{payment.status}</TableCell>
        <TableCell sx={getStatus(payment.status)}>
          {`${formatPrice(payment.amount) + ''} (${payment.currency})`}{' '}
        </TableCell>
        <TableCell>
          <IconButton onClick={() => handleOpenEditModal(payment.protocol)}>
            <MoreHoriz color="primary" />
          </IconButton>
        </TableCell>
      </TableRow>
    );
  };

  const handleOpenEditModal = async (protocol: string) => {
    try {
      const response = await axios.get(`${URL}?protocol=${protocol}`);

      setSelectedPayment(response.data.payment);
      setModalOpen(true);
    } catch (error) {
      console.error('Failed to fetch payment details:', error);
    }
  };

  const fetchPayments = async () => {
    try {
      const response = await axios.get(URL);
      const formattedPayment = response.data.payments.map((payment: any) => ({
        ...payment,
        payment_date: format(new Date(payment.payment_date), 'dd/MM/yyyy'),
      }));

      setPayments(formattedPayment);
    } catch (error) {
      console.error('Error fetching payments:', error);
    } finally {
      setTrigger(!trigger);
    }
  };

  const triggerRefresh = (callback: () => void, delay: number = 3000) => {
    setTimeout(() => {
      callback();
    }, delay);
  };

  return (
    <TableUI
      data={payments}
      renderHeader={renderHeader}
      renderItem={renderItem}
    />
  );
};

export default PayoutsDashboard;
