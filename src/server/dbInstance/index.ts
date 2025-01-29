import {Pool} from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    port:Number(process.env.DB_PORT),
});
 

pool.query('SELECT 1')
  .then((res) => console.log('Database connection is working', res.rows))
  .catch((err) => console.error('Error testing database connection', err));

pool.on('connect',() => {
   console.log('Connected to the DB');

});

pool.on('error',(error:Error) => {
    console.log('Error in Connecting with DB',error);
    process.exit(-1);

});

export default pool;