import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,IconButton } from "@mui/material";
import { MoreHoriz } from "@mui/icons-material";


interface Transaction {
 id : string;
 createdAt: string;
 status: string;
 amount : number;
}

interface PayoutsTableProps {
    transactions : Transaction[];
}



const PayoutsTable: React.FC <PayoutsTableProps> = ({transactions}) => {
    return(
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ fontWeight: 700,fontSize:'1rem'}}>Protocol</TableCell>
                        <TableCell sx={{ fontWeight: 700 ,fontSize:'1rem'}}>Date</TableCell>
                        <TableCell sx={{ fontWeight: 700 ,fontSize:'1rem'}}>Status</TableCell>
                        <TableCell sx={{ fontWeight: 700 ,fontSize:'1rem' }}>Amount</TableCell>
                        <TableCell sx={{ fontWeight: 700,fontSize:'1rem' }}>Details</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {transactions.map((payment) => (
                        <TableRow key={payment.id}> 
                        <TableCell>{payment.id}</TableCell>
                        <TableCell>{payment.createdAt}</TableCell>
                        <TableCell>{payment.status}</TableCell>
                        <TableCell>{payment.amount}</TableCell>
                        <TableCell>
                            <IconButton>
                                <MoreHoriz /> 
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