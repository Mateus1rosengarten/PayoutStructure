import express, { Request, Response } from "express";
import { handleCreatePayment, handleGetPaymentByProtocol, handleGetPayments } from '../controllers/controllers';



const app = express();
const port = 3000;

app.use(express.json())

app.get('/api/payments', handleGetPayments)
app.get('/api/payments/protocol', handleGetPaymentByProtocol)
app.post('/api/payments' ,handleCreatePayment)

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});