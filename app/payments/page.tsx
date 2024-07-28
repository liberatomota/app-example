"use client"

import React, { ReactElement, useEffect, useState } from 'react'
import { Payment } from '@/models/payments'
import { useGridData } from '@/contexts/gridData';
import { GridState } from '@/types/grid';
import Code from '@/components/grid/code'
import Actions from '@/components/payments/actions'
import PaymentTable from '@/components/payments/table'

const Payments = (): ReactElement => {
  const [payments, setPayments] = useState<Payment[]>([]);
  const { state } = useGridData();

  const handlePaymentSubmit = async (payment: Payment) => {
    try {
      const response = await fetch('/api/payments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payment),
      });
      if (!response.ok) {
        throw new Error('Failed to process payment');
      }
      const { result } = await response.json() as { result: Payment };
      // console.log("newPayment", result)

      setPayments(prevPayments => [...prevPayments, result]);
      
    } catch (error: unknown) {
      if (error instanceof Error) {
        alert('Failed to submit payment: ' + error.message);
      } else {
        alert('Failed to submit payment: An unknown error occurred');
      }
    }
  };
  

  useEffect(() => {
    const fetchPayments = async () => {
      const response = await fetch('/api/payments');
      const { result } = await response.json() as {
        result: Payment[];
      };
      setPayments(result);
    };
  
    fetchPayments();
  }, []);


  return (
    <div className="p-8">
        <Code />
        <Actions onSubmit={handlePaymentSubmit}/>
        <PaymentTable payments={payments}/>
    </div>
  )
}

export default Payments