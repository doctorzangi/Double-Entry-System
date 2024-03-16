import React from 'react';

const Modal = ({ isOpen, onClose, buttonClicked }) => {
    const modalTitle = buttonClicked === 'credit' ? 'Credit' : 'Debit';
  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center ${isOpen ? '' : 'hidden'}`}>
      <div className="bg-white p-5 rounded-2xl shadow-lg">
        <div className="text-xl font-semibold mb-4">Add {modalTitle}</div>
        <form className="w-full">
          <div className="flex mb-4">
            <div className="w-1/2 mr-2">
              <label htmlFor="customerId" className="block text-sm font-medium text-gray-700">Customer Name</label>
              <input type="text" id="customerName" className="mt-1 p-2 block w-full border focus:outline-none border-gray-300 rounded-md focus:ring-0 focus:border-gray-300 sm:text-sm" />
            </div>
            <div className="w-1/2 ml-2">
              <label htmlFor="Date" className="block text-sm font-medium text-gray-700">Customer ID</label>
              <input type="text" id="customerID" className="mt-1 p-2 block w-full border focus:outline-none border-gray-300 rounded-md focus:ring-0 focus:border-gray-300 sm:text-sm" />
            </div>
          </div>
          <div className="flex mb-4">
            <div className="w-1/2 mr-2">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">Particulars</label>
              <input type="text" id="customerAddress" className="mt-1 p-2 block w-full border focus:outline-none border-gray-300 rounded-md focus:ring-0 focus:border-gray-300 sm:text-sm" />
            </div>
            <div className="w-1/2 ml-2">
              <label htmlFor="accountID" className="block text-sm font-medium text-gray-700">Description</label>
              <input type="text" id="customerContact" className="mt-1 p-2 block w-full  border focus:outline-none border-gray-300 rounded-md focus:ring-0 focus:border-gray-300 sm:text-sm" />
            </div>
          </div>
          <div className="flex mb-4">
            <div className="w-1/2 mr-2">
              <label htmlFor="Amount" className="block text-sm font-medium text-gray-700">Reference</label>
              <input type="text" id="customerAddress" className="mt-1 p-2 block w-full border focus:outline-none border-gray-300 rounded-md focus:ring-0 focus:border-gray-300 sm:text-sm" />
            </div>
            <div className="w-1/2 ml-2">
              <label htmlFor="accountType" className="block text-sm font-medium text-gray-700">Amount</label>
              <input type="number" id="customerAddress" className="mt-1 p-2 block w-full border focus:outline-none border-gray-300 rounded-md focus:ring-0 focus:border-gray-300 sm:text-sm" />
            </div>
          </div>
          <div className="flex mb-4">
            <div className="w-1/2 mr-2">
              <label htmlFor="Amount" className="block text-sm font-medium text-gray-700">Paid Amount</label>
              <input type="number" id="customerAddress" className="mt-1 p-2 block w-full border focus:outline-none border-gray-300 rounded-md focus:ring-0 focus:border-gray-300 sm:text-sm" />
            </div>
            <div className="w-1/2 ml-2">
              <label htmlFor="accountType" className="block text-sm font-medium text-gray-700">Remainig Amount</label>
              <input type="number" id="customerAddress" className="mt-1 p-2 block w-full border focus:outline-none border-gray-300 rounded-md focus:ring-0 focus:border-gray-300 sm:text-sm" />
            </div>
          </div>
          
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 mr-2 bg-gray-500 rounded hover:bg-gray-600"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-navy-800 text-white rounded hover:bg-navy-900"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
