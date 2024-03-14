import React from 'react';

const Loans = () => {
  // Example data
  const totalLoan = 5000;
  const loanList = [
    { amount: 3000, person: 'John Doe', dueDate: '2024-03-15' },
    { amount: 1000, person: 'Jane Smith', dueDate: '2024-03-20' },
    { amount: 89000, person: 'Mark Johnson', dueDate: '2024-03-25' },
    { amount: 7000, person: 'John Flow', dueDate: '2024-03-15' },
    { amount: 4000, person: 'Jonathan Quin', dueDate: '2024-03-20' },
    { amount: 5000, person: 'Harley Barbara', dueDate: '2024-03-25' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-4">Welcome to Loan Tracker</h1>
      <h2 className="text-2xl font-semibold mb-4">Total Loan: ${totalLoan}</h2>
      <h3 className="text-xl font-semibold mb-2">List of Loans:</h3>
      <ul className='grid grid-cols-3 gap-4'>
        {loanList.map((loan, index) => (
          <li key={index} className="bg-white p-3 rounded-xl">
            <div className='flex flex-row mb-1'><p className='font-bold'>Amount:</p><p className='ml-5'>${loan.amount}</p></div>
            <div className='flex flex-row mb-1'><p className='font-bold'>Person:</p><p className='ml-5'>{loan.person}</p></div>
            <div className='flex flex-row mb-1'><p className='font-bold'>Due Date:</p><p className='ml-5'>{loan.dueDate}</p></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Loans;