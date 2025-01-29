import pool from "../dbInstance";


interface Payment {
  protocol:string;
  name:string;
  payment_method:string;
  amount:number;
  currency:string;
  description?:string;
  payment_date: string;
  status:string;
}




export const getAllPayments = async (): Promise<Payment[]> => {
    try {
    const query = `
    SELECT protocol, payment_date, status, amount ,currency
    FROM payments
  `;
    const {rows} = await pool.query(query)
    return rows;
    }
    catch(error) {
        console.error('Error in getAllPayments Model',error);
        return [];
    };

};

export const getPaymentByProtocol = async (protocol:string): Promise<Payment[]> => {
try {
    const query = `SELECT * FROM payments
                   WHERE protocol = $1`;

    const {rows} = await pool.query(query,[protocol]);
    return rows.length !== 0 ? rows[0] : null;            

}
catch(error) {
    console.error('Error in getPaymentProtocol Model');
        return [];

}

}


export const insertPayment = async (payment:Payment) : Promise<Payment | null> => {
try{
    const query = `
    INSERT INTO payments(protocol,name, payment_method,amount,currency,description,payment_date,status)
    VALUES ($1, $2, $3, $4, $5, $6, $7 ,$8)
    RETURNING *
    `;
    const{rows} = await pool.query(query,[
        payment.protocol,
        payment.name,
        payment. payment_method,
        payment.amount,
        payment.currency,
        payment.description,
        payment.payment_date,
        payment.status
    ])
    return rows[0];

}
catch(error){
    console.error('Error in CreatePayment model',error);
    return null;
};

};

export const updatePayment = async (payment:Payment) : Promise<Payment | null> => {
    try{
    const updateFields:Partial<Payment> = {
        protocol:payment.protocol,
        name:payment.name,
        currency:payment.currency,
        description:payment.description,
        payment_method:payment. payment_method,
        amount:payment.amount,
    };
    console.log('updateFields',updateFields)

    const updatedFields = Object.entries(updateFields).filter(([_,value]) => value !== undefined);
    if(updatedFields.length === 0) return null;

    console.log('updatedFields',updatedFields)
    
    const fields = updatedFields.map(([key,_],index) => `${key} = $${index + 1}`).join(', ');
    const values = updatedFields.map(([_,value]) => value);
    values.push(payment.protocol);

    console.log('payment protocol',payment.protocol)

    console.log('fields',fields)
    console.log('protocol',values)

    const query = `UPDATE payments
                   SET ${fields} 
                   WHERE protocol = $${values.length}
                   RETURNING *`;
                    
    const {rows} = await pool.query(query,values);
    console.log('test',rows[0])
    return rows[0];


} catch(error){
    console.error('Error in UpdatePayment Model,' ,error)
    return null;
};
};

export const updateStatus = async(status:string ,protocol:string) : Promise<string | null> => {
    try {
         const query = `UPDATE payments
                       SET status = $1
                       WHERE protocol = $2
                       RETURNING status`;
        const {rows} = await pool.query(query,[status,protocol]);
        return rows.length > 0 ? rows[0] : null;              
          
        }
    catch(error) {
        console.error('Error in changeStatus Model',error)
        return null;

    }
}







