import {
  handleCreatePayment,
  handleGetPaymentByProtocol,
  handleGetPayments,
  handleUpdatePayment,
} from '@/server/controllers/controllers';
import { NextRequest } from 'next/server';
export const runtime = 'nodejs';
export const maxDuration = 10;

export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);

  const protocol = searchParams.get('protocol');
  if (protocol) {
    return handleGetPaymentByProtocol(protocol);
  } else {
    return handleGetPayments();
  }
};

export const PUT = async (req: NextRequest) => {
  return handleUpdatePayment(req);
};

export async function POST(req: NextRequest) {
  return handleCreatePayment(req);
}
