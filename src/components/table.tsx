import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
} from "@mui/material";
import { MoreHoriz } from "@mui/icons-material";
import { useEditPayment } from "@/context/editPayment";
import axios from "axios";
import { formatPrice } from "@/utils/format";
import { getStatus, tableCell, tableProtocol,  } from "@/utils/customStyles";



interface Transaction {
  amount: number;
  currency:string;
  payment_date: string;
  status: string;
  protocol: string;
}

interface PayoutsTableProps {
  transactions: Transaction[];
}


const PayoutsTable: React.FC<PayoutsTableProps> = ({ transactions }) => {
  const { setModalOpen,setSelectedPayment} = useEditPayment();

  const handleOpenEditModal = async (protocol:string) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/payments?protocol=${protocol}`);

        setSelectedPayment(response.data.payment);
        setModalOpen(true);
    }
    catch (error) {
      console.error("Failed to fetch payment details:", error);
    }

  }

  
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={tableCell}>
              Protocol
            </TableCell>
            <TableCell sx={tableCell}>
              Date
            </TableCell>
            <TableCell sx={tableCell}>
              tableCell
            </TableCell>
            <TableCell sx={tableCell}>
              Amount
            </TableCell>
            <TableCell sx={tableCell}>
              Details
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map((payment) => (
            <TableRow key={payment.protocol}>
              <TableCell sx={tableProtocol}
              >{payment.protocol}</TableCell>
              <TableCell>{payment.payment_date}</TableCell>
              <TableCell sx={getStatus(payment.status)}>{payment.status}</TableCell>
              <TableCell sx={getStatus(payment.status)}> {`${formatPrice(payment.amount)+ ''} (${payment.currency})`} </TableCell>              
              <TableCell>
                <IconButton onClick={() => handleOpenEditModal(payment.protocol)}>
                  <MoreHoriz color="primary"/>
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PayoutsTable;
