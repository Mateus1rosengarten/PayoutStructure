import { Payment } from '@/utils/types';
import pool from '../dbInstance';

export const getAllPayments = async (): Promise<Payment[]> => {
  try {
    const query = `
    SELECT protocol, date, status, amount ,currency
    FROM payments
    ORDER BY date DESC;
  `;
    const { rows } = await pool.query(query);
    return rows;
  } catch (error) {
    console.error('Error in getAllPayments Model', error);
    return [];
  }
};

export const getPaymentByProtocol = async (
  protocol: string
): Promise<Payment[]> => {
  try {
    const query = `SELECT * FROM payments
                   WHERE protocol = $1`;

    const { rows } = await pool.query(query, [protocol]);
    return rows.length !== 0 ? rows[0] : null;
  } catch (error) {
    console.error('Error in getPaymentProtocol Model');
    return [];
  }
};

export const insertPayment = async (
  payment: Payment
): Promise<Payment | null> => {
  try {
    const query = `
    INSERT INTO payments(protocol,name, payment_method,amount,currency,description,date,status)
    VALUES ($1, $2, $3, $4, $5, $6, $7 ,$8)
    RETURNING *
    `;
    const { rows } = await pool.query(query, [
      payment.protocol,
      payment.name,
      payment.payment_method,
      payment.amount,
      payment.currency,
      payment.description,
      payment.date,
      payment.status,
    ]);
    return rows[0];
  } catch (error) {
    console.error('Error in CreatePayment model', error);
    return null;
  }
};

export const updatePayment = async (
  payment: Payment
): Promise<Payment | null> => {
  try {
    const updateFields: Partial<Payment> = {
      protocol: payment.protocol,
      name: payment.name,
      currency: payment.currency,
      description: payment.description,
      payment_method: payment.payment_method,
      amount: payment.amount,
    };

    const updatedFields = Object.entries(updateFields).filter(
      ([_, value]) => value !== undefined
    );
    if (updatedFields.length === 0) return null;

    const fields = updatedFields
      .map(([key, _], index) => `${key} = $${index + 1}`)
      .join(', ');
    const values = updatedFields.map(([_, value]) => value);
    values.push(payment.protocol);

    const query = `UPDATE payments
                   SET ${fields} 
                   WHERE protocol = $${values.length}
                   RETURNING *`;

    const { rows } = await pool.query(query, values);
    return rows[0];
  } catch (error) {
    console.error('Error in UpdatePayment Model,', error);
    return null;
  }
};

export const updateStatus = async (
  status: string,
  protocol: string
): Promise<string | null> => {
  try {
    const query = `UPDATE payments
                       SET status = $1
                       WHERE protocol = $2
                       RETURNING status`;
    const { rows } = await pool.query(query, [status, protocol]);
    return rows.length > 0 ? rows[0] : null;
  } catch (error) {
    console.error('Error in changeStatus Model', error);
    return null;
  }
};
