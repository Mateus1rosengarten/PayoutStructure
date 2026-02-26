import dotenv from 'dotenv';
import { Pool } from 'pg';

dotenv.config();

const pool = new Pool({
  user: 'mateusrosengarten',
  host: 'localhost',
  database: 'payoutstructure',
  password: '1131',
  port: 5432,
});

pool.on('connect', () => {
  console.log('Connected to the DB');
});

pool.on('error', (error: Error) => {
  console.log('Error in Connecting with DB', error);
  process.exit(-1);
});

export default pool;
