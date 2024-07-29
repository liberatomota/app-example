import React, { useState } from 'react'
import { useGridData } from '@/contexts/gridData';
import { Payment } from '@/models/payments';

interface PaymentFormProps {
    onSubmit: (payment: Payment) => void;
}

const Actions: React.FC<PaymentFormProps> = ({ onSubmit }) => {
    const [name, setName] = useState<string>('');
    const [ammount, setAmmount] = useState<string>('');
    const { state } = useGridData();

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const ammountNumber = parseFloat(ammount);
        if (isNaN(ammountNumber)) {
            return alert('Please enter a valid ammount for the payment.');
        }

        if (!name) {
            return alert('Please enter a valid name for the payment.');
        }

        onSubmit({ name, ammount: ammountNumber, code: state.code, grid: state.charGrid });
    };

    return (
        <div className="grid grid-cols-5 pb-4 ">
            <div className="flex flex-col pr-2">
                <label htmlFor="payment" className="block text-xs font-medium text-gray-400">
                    PAYMENT NAME
                </label>
                <input
                    type="text"
                    id="payment"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={state.randomStarted === false}
                    placeholder="Payment name"
                    className="mt-1 block border border-gray-400 rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
            </div>


            <div className="flex flex-col pr-2">
                <label htmlFor="ammount" className="block text-xs font-normal text-gray-400">
                    AMMOUNT
                </label>
                <input
                    type="text"
                    id="ammount"
                    value={ammount}
                    onChange={(e) => {
                        const ammountNumber = parseFloat(e.target.value);
                        if (!isNaN(ammountNumber) || e.target.value.length <= 0) {
                            setAmmount(e.target.value)
                        }
                    }}
                    disabled={state.randomStarted === false}
                    placeholder="ammount"
                    className="mt-1 block border border-gray-400 rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
            </div>



            <div className="flex flex-col p-b-0">
                <div className="h-3 mb-2"></div>
                <button
                    className={`py-2 h-11 mt-[-1px] w-20 pr-1/2 ${state?.randomStarted ? 'bg-blue-500' : 'bg-gray-400'} text-white rounded-md`}
                    onClick={(e) => handleSubmit(e)}
                    disabled={state.randomStarted === false}
                >
                    + ADD
                </button>
            </div>
        </div>
    )
}

export default Actions