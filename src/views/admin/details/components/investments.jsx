// 

import React, { useState } from 'react';

const Investment = () => {
  // State to manage investment data
  const [investments, setInvestments] = useState([
    { type: 'Income', amount: 5000 },
    { type: 'Profit', amount: 1500 },
    { type: 'Remaining Income', amount: 3500 },
    { type: 'Debit', amount: 1000 },
    { type: 'Credit', amount: 500 },
  ]);

  // Calculate total amount
  const totalAmount = investments.reduce((total, investment) => total + investment.amount, 0);

  return (
    <div className='mt-9 p-5 pr-10 pl-10 z-5 relative flex rounded-2xl bg-white bg-clip-border dark:bg-navy-800 dark:text-white dark:shadow-none flex-row items-center justify-between h-auto'>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3 border border-gray-300">Type</th>
            <th className="p-3 border border-gray-300">Amount</th>
          </tr>
        </thead>
        <tbody>
          {investments.map((investment, index) => (
            <tr key={index} className={investment.type === 'Remaining Income' ? 'font-bold' : ''}>
              <td className="p-3 border border-gray-300">{investment.type}</td>
              <td className={`p-3 border border-gray-300 ${investment.type === 'Profit' ? 'text-green-600' : investment.type === 'Remaining Income' ? 'text-blue-600' : investment.type === 'Debit' ? 'text-red-600' : investment.type === 'Credit' ? 'text-yellow-600' : ''}`}>{investment.amount}</td>
            </tr>
          ))}
          <tr className="bg-gray-100">
            <td className="p-3 border border-gray-300 font-bold">Total</td>
            <td className="p-3 border border-gray-300 font-bold">{totalAmount}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Investment;
