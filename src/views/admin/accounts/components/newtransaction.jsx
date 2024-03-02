import React from 'react';

const NewTransaction = () => {
  return (
    <div className='mt-9 p-5 pr-10 pl-10 z-5 relative flex rounded-2xl bg-white bg-clip-border dark:bg-navy-800 dark:text-white dark:shadow-none flex-row items-center justify-between h-auto'>
      <form className="w-full">
        <div className="flex mb-4">
          <div className="w-1/2 mr-2">
            <label htmlFor="customerId" className="block text-sm font-medium text-gray-700">Customer ID</label>
            <input type="text" id="customerId" className="mt-1 p-2 block w-full border focus:outline-none border-gray-300 rounded-md focus:ring-0 focus:border-gray-300 sm:text-sm" />
          </div>
          <div className="w-1/2 ml-2">
            <label htmlFor="Date" className="block text-sm font-medium text-gray-700">Date</label>
            <input type="datetime-local" id="customerName" className="mt-1 p-2 block w-full border focus:outline-none border-gray-300 rounded-md focus:ring-0 focus:border-gray-300 sm:text-sm" />
          </div>
        </div>
        <div className="flex mb-4">
          <div className="w-1/2 mr-2">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
            <input type="text" id="customerAddress" className="mt-1 p-2 block w-full border focus:outline-none border-gray-300 rounded-md focus:ring-0 focus:border-gray-300 sm:text-sm" />
          </div>
          <div className="w-1/2 ml-2">
            <label htmlFor="accountID" className="block text-sm font-medium text-gray-700">Account ID</label>
            <input type="text" id="customerContact" className="mt-1 p-2 block w-full  border focus:outline-none border-gray-300 rounded-md focus:ring-0 focus:border-gray-300 sm:text-sm" />
          </div>
        </div>
        <div className="flex mb-4">
          <div className="w-1/2 mr-2">
            <label htmlFor="Amount" className="block text-sm font-medium text-gray-700">Amount</label>
            <input type="number" id="customerAddress" className="mt-1 p-2 block w-full border focus:outline-none border-gray-300 rounded-md focus:ring-0 focus:border-gray-300 sm:text-sm" />
          </div>
          <div className="w-1/2 ml-2">
            <label htmlFor="accountType" className="block text-sm font-medium text-gray-700">Account Type</label>
            <select id="accountType" className="mt-1 p-2 block w-full border focus:outline-none border-gray-300 rounded-md focus:ring-0 focus:border-gray-300 sm:text-sm">
              <option value="credit">Credit</option>
              <option value="debit">Debit</option>
            </select>
          </div>
        </div>
        
        <button type="submit" className="bg-navy-800 text-white w-full py-2 px-4 rounded-full">Add Transaction</button>
      </form>
    </div>
  );
};

export default NewTransaction;