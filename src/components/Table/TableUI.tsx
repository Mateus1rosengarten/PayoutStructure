import { Payment } from '@/utils/types';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { ReactNode } from 'react';

interface tableUIProps {
  data: Payment[];
  renderHeader: () => ReactNode;
  renderItem: (item: Payment) => ReactNode;
}

const TableUI: React.FC<tableUIProps> = ({
  data,
  renderHeader,
  renderItem,
}) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>{renderHeader()}</TableHead>
        <TableBody>
          {data.length === 0
            ? Array(5)
                .fill(null)
                .map((_, index) => (
                  <TableRow key={index}>
                    <TableCell
                      colSpan={5}
                      sx={{ textAlign: 'center' }}
                    ></TableCell>
                  </TableRow>
                ))
            : data.map((item: Payment) => renderItem(item))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableUI;
