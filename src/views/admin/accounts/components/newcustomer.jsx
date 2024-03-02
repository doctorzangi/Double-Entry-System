import React from 'react';

const NewCustomer = () => {
  return (
    <div className='mt-9 p-5 pr-10 pl-10 z-5 relative flex rounded-2xl bg-white bg-clip-border dark:bg-navy-800 dark:text-white dark:shadow-none flex-row items-center justify-between h-auto'>
      <form className="w-full">
        <div className="flex mb-4">
          <div className="w-1/2 mr-2">
            <label htmlFor="customerId" className="block text-sm font-medium text-gray-700">Customer ID</label>
            <input type="text" id="customerId" className="mt-1 p-2 block w-full border focus:outline-none border-gray-300 rounded-md focus:ring-0 focus:border-gray-300 sm:text-sm" />
          </div>
          <div className="w-1/2 ml-2">
            <label htmlFor="customerName" className="block text-sm font-medium text-gray-700">Customer Name</label>
            <input type="text" id="customerName" className="mt-1 p-2 block w-full border focus:outline-none border-gray-300 rounded-md focus:ring-0 focus:border-gray-300 sm:text-sm" />
          </div>
        </div>
        <div className="flex mb-4">
          <div className="w-1/2 mr-2">
            <label htmlFor="customerAddress" className="block text-sm font-medium text-gray-700">Address</label>
            <input type="text" id="customerAddress" className="mt-1 p-2 block w-full border focus:outline-none border-gray-300 rounded-md focus:ring-0 focus:border-gray-300 sm:text-sm" />
          </div>
          <div className="w-1/2 ml-2">
            <label htmlFor="customerContact" className="block text-sm font-medium text-gray-700">Contact Info</label>
            <input type="text" id="customerContact" className="mt-1 p-2 block w-full  border focus:outline-none border-gray-300 rounded-md focus:ring-0 focus:border-gray-300 sm:text-sm" />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="customerBalance" className="block text-sm font-medium text-gray-700">Balance</label>
          <input type="text" id="customerBalance" className="mt-1 p-2 block w-full border focus:outline-none border-gray-300 rounded-md focus:ring-0 focus:border-gray-300 sm:text-sm" />
        </div>
        <button type="submit" className="bg-navy-800 text-white w-full py-2 px-4 rounded-full">Submit</button>
      </form>
    </div>
  );
};

export default NewCustomer;