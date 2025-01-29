import { getAllPayments, getPaymentByProtocol, insertPayment, updatePayment, updateStatus } from "../models/models";
import { NextRequest, NextResponse } from "next/server";


const generateProtocol = () => {
  const protocol = `P${Math.floor(Math.random() * 100000)}`;
  return protocol;
};

export const handleGetPayments = async () => {
  try {
    
    const response = await getAllPayments();
    return NextResponse.json({
      message: "Payments fetched successfully",
      payments: response,
    });  } catch (error) {
    console.error("Error in showAllPayments Controller", error);
    return NextResponse.json(
      { error: "Failed to fetch payments" },
      { status: 500 }
    );  }
};




export const handleGetPaymentByProtocol = async (protocol: string) => {
  try {
    const response = await getPaymentByProtocol(protocol);
    return NextResponse.json({
      message: "Payment fetched successfully",
      payment: response,
    });
  } catch (error) {
    console.error("Error in showPaymentByProtocol controller", error);
    return NextResponse.json(
      { error: "Failed to fetch payment" },
      { status: 500 }
    );
  }
};

export const handleCreatePayment = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const { payment } = body;

    if (!payment) {
      return NextResponse.json(
        { error: "Payment data is required" },
        { status: 400 }
      );
    }
    const payment_date = new Date().toISOString();
    console.log('payment date',payment_date);
    const protocol = generateProtocol();

    const paymentObject = {
      ...payment,
      payment_date,
      status: "waiting",
      protocol,
    };

    const response = await insertPayment(paymentObject);
    

    setTimeout(async () => {
      try {
        await changeStatus(protocol);
      } catch (error) {
        console.error(`Error changing status for protocol for payment ${protocol}`, error);
      }
    }, 2000);

    return NextResponse.json({
      message: "Payment created successfully",
      payment: response,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create payment" },
      { status: 500 }
    );
  }
};


export const handleUpdatePayment = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const { payment } = body;
    console.log('payment object no controoler',payment)

    if (!payment) {
      return NextResponse.json(
        { error: "Payment data is required" },
        { status: 400 }
      );
    }
   

    const updatedPayment = await updatePayment(payment);

    setTimeout(async () => {
      try {
        await changeStatus(payment.protocol);
      } catch (error) {
        console.error(`Error changing status for protocol for payment ${payment.protocol}`, error);
      }
    }, 2000);

    return NextResponse.json({
      message: "Payment updated successfully",
      payment: updatedPayment,
    });


  }
  catch(error) {
    return NextResponse.json(
      { error: "Failed to update payment"},
      { status: 500 })

  }

};
  

export const changeStatus = async (protocol:string) => {
  try {
    const isSuccess = Math.random() > 0.4;
    const status = isSuccess ? "Success" : "Failed";
    const response = await updateStatus(status,protocol);
    return response;

  } catch (error) {
    console.error("Error in changeStatus controller",error);
  }
};
