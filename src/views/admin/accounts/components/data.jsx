import React from 'react';

const Data = () => {
  const handleDownload = (dataType) => {
    // Logic to download data based on dataType
    console.log(`Downloading ${dataType} data...`);
  };

  return (
    <div className='mt-9 p-5 pr-10 pl-10 z-5 relative flex rounded-2xl bg-white bg-clip-border dark:bg-navy-800 dark:text-white dark:shadow-none flex-row items-center justify-between h-auto'>
      <div className='w-full'>
        <div className="mb-3 flex justify-between">
          <label className="font-bold text-lg mr-3 text-gray-700">Active Customers List</label>
          <button className="btn-download bg-gray-900 p-2 text-white rounded-xl font-semibold" onClick={() => handleDownload('Active Customers')}>
            Download
          </button>
        </div>
        <div className="mb-3 flex justify-between">
          <label className="font-bold text-lg mr-3 text-gray-700">Non-Active Customers List</label>
          <button className="btn-download bg-gray-900 p-2 text-white rounded-xl font-semibold" onClick={() => handleDownload('Non-Active Customers')}>
            Download
          </button>
        </div>
        <div className="mb-3 flex justify-between">
          <label className="font-bold text-lg mr-3 text-gray-700">Premium Customers List</label>
          <button className="btn-download bg-gray-900 p-2 text-white rounded-xl font-semibold" onClick={() => handleDownload('Premium Customers')}>
            Download
          </button>
        </div>
        <div className="mb-3 flex justify-between">
          <label className="font-bold text-lg mr-3 text-gray-700">All Transactions List</label>
          <button className="btn-download bg-gray-900 p-2 text-white rounded-xl font-semibold" onClick={() => handleDownload('All Transactions')}>
            Download
          </button>
        </div>
        <div className="mb-3 flex justify-between">
          <label className="font-bold text-lg mr-3 text-gray-700">Credited Transactions List</label>
          <button className="btn-download bg-gray-900 p-2 text-white rounded-xl font-semibold" onClick={() => handleDownload('Credited Transactions')}>
            Download
          </button>
        </div>
        <div className="mb-3 flex justify-between">
          <label className="font-bold text-lg mr-3 text-gray-700">Debited Transactions List</label>
          <button className="btn-download bg-gray-900 p-2 text-white rounded-xl font-semibold" onClick={() => handleDownload('Debited Transactions')}>
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default Data;
