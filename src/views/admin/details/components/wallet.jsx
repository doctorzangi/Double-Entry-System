// import React from 'react'

// const Wallet = () => {
//   return (
//     <div>Wallet</div>
//   )
// }

// export default Wallet

import React, { useState } from 'react';

const Wallet = () => {
  // Sample data for wallet transactions
  const [transactions, setTransactions] = useState([
    { id: 1, type: 'Deposit', date: '2024-03-07', amount: 1000, description: 'Deposit from bank' },
    { id: 2, type: 'Withdrawal', date: '2024-03-06', amount: 500, description: 'Withdrawal for groceries' },
    { id: 3, type: 'Deposit', date: '2024-03-05', amount: 1500, description: 'Deposit from salary' },
    // Add more transactions as needed
  ]);

  // Calculate wallet balance based on transactions
  const walletBalance = transactions.reduce((total, transaction) => {
    return transaction.type === 'Deposit' ? total + transaction.amount : total - transaction.amount;
  }, 0);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold mb-4">My Wallet</h2>
      <div className="bg-gray-100 p-4 rounded-lg mb-4">
        <h3 className="text-lg font-semibold mb-2">Wallet Balance</h3>
        <p className="text-2xl font-bold">${walletBalance}</p>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Transaction History</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2">ID</th>
                <th className="p-2">Type</th>
                <th className="p-2">Date</th>
                <th className="p-2">Amount</th>
                <th className="p-2">Description</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map(transaction => (
                <tr key={transaction.id}>
                  <td className="p-2">{transaction.id}</td>
                  <td className="p-2">{transaction.type}</td>
                  <td className="p-2">{transaction.date}</td>
                  <td className={`p-2 ${transaction.type === 'Deposit' ? 'text-green-600' : 'text-red-600'}`}>${transaction.amount}</td>
                  <td className="p-2">{transaction.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
