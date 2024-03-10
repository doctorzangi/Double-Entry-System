import React from 'react';

const History = () => {
  // Example transaction data
  const transactions = [
    {
      id: 1,
      date: '2024-03-01',
      type: 'Credit',
      amount: 100,
      senderOrReceiver: 'John Doe'
    },
    {
      id: 2,
      date: '2024-03-02',
      type: 'Debit',
      amount: 50,
      senderOrReceiver: 'Jane Smith'
    },
    // Add more transactions as needed
  ];

  return (
    <div className='container mx-auto px-4 py-8'>
    <h2 className="text-3xl font-semibold mb-4">Transaction History</h2>
      <div className="p-5 pr-10 pl-10 z-5 relative rounded-xl bg-white bg-clip-border dark:bg-navy-800 dark:text-white h-auto">
        <h2 className="text-lg font-semibold mb-4">Transaction History</h2>
        <div className="overflow-auto max-h-96">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left">Date</th>
                <th className="text-left">Type</th>
                <th className="text-left">Amount</th>
                <th className="text-left">Sender/Receiver</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map(transaction => (
                <tr key={transaction.id} className="border-b border-gray-200">
                  <td className="py-2">{transaction.date}</td>
                  <td className="py-2">{transaction.type}</td>
                  <td className={`py-2 ${transaction.type === 'Credit' ? 'text-green-600' : 'text-red-600'}`}>{transaction.amount}</td>
                  <td className="py-2">{transaction.senderOrReceiver}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default History;
