import dotenv from 'dotenv';
import { Pool } from 'pg';

dotenv.config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: Number(process.env.DB_PORT),
});

pool.on('connect', () => {
  console.log('Connected to the DB');
});

pool.on('error', (error: Error) => {
  console.log('Error in Connecting with DB', error);
  process.exit(-1);
});

export default pool;
