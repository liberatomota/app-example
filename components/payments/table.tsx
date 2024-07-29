import React, { ReactElement } from 'react';
import ToolTip from '@/components/tooltip';
import { Payment } from '@/models/payments';

interface PaymentTableProps {
    payments: Payment[];
}

const PaymentTable = ({ payments }: PaymentTableProps): ReactElement => {

    const beautyfyGrid = (grid: string[][]) => {
        let output: string = "";
        for (let i = 0; i < grid.length; i++) {
            const row = grid[i];
            output += `[${row.join(', ')}]<br />`;
        }
        return output
    }

    return (
        <div className="w-full mx-auto mt-8">
            <label htmlFor="character" className="block text-xs font-medium text-gray-400">
                PAYMENT LIST
            </label>
            <div className="bg-white rounded-lg my-6 relative overflow-visible">
                <table className="min-w-full table-fixed border-collapse border-1 border-gray-300 rounded-lg">
                    <thead className="bg-white">
                        <tr>
                            <th className="border border-gray-300 p-3 px-5 w-1/2 text-left text-gray-400 font-normal">NAME</th>
                            <th className="border border-gray-300 p-3 px-5 w-1/6 text-left text-gray-400 font-normal">AMOUNT</th>
                            <th className="border border-gray-300 p-3 px-5 w-1/6 text-left text-gray-400 font-normal">CODE</th>
                            <th className="border border-gray-300 p-3 px-5 w-1/6 text-left text-gray-400 font-normal">GRID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(payments) && payments.map((payment, i) => (
                            <tr key={`tr-${payment.code}-${i}`}>
                                <td className="border border-gray-300 p-3 px-5">{payment.name}</td>
                                <td className="border border-gray-300 p-3 px-5">{payment.ammount}</td>
                                <td className="border border-gray-300 p-3 px-5">{payment.code}</td>
                                <td className="border border-gray-300 p-3 px-5">
                                    <ToolTip tooltip={beautyfyGrid(payment.grid)}>grid <span>ℹ️</span></ToolTip>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default PaymentTable;
