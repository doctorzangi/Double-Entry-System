import React from 'react';

const Links = ({showNewCustomer, showNewTransaction}) => {

  return (
    <div className='mt-9 p-5 pr-10 pl-10 z-5 relative flex rounded-2xl bg-white bg-clip-border dark:bg-navy-800 dark:text-white dark:shadow-none flex-row items-center justify-between h-auto'>
      <div className='w-full'>
        <div className="mb-3 flex justify-between">
          <label className="font-bold text-lg mr-3 text-gray-700">Add New Customer</label>
          <button className="btn-download bg-gray-900 p-2 text-white rounded-xl font-semibold" onClick={showNewCustomer}>
            Add
          </button>
        </div>
        <div className="mb-3 flex justify-between">
          <label className="font-bold text-lg mr-3 text-gray-700">Make New Transaction</label>
          <button className="btn-download bg-gray-900 p-2 text-white rounded-xl font-semibold" onClick={showNewTransaction}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Links;
