import React, { useState } from 'react';
import { addCustomer } from 'services/customerService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NewCustomer = () => {
  const [name, setName] = useState('');
  const [contactInformation, setContactInformation] = useState('');
  const [address, setAddress] = useState('');
  const [customerCode, setCustomerCode] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    try {
        const customerData = {
            name,
            contact_information: contactInformation,
            address,
            customer_code: customerCode
        };

        // Check if required fields are not empty
        if (!customerData.name || !customerData.customer_code) {
            console.error('Name and Customer Code are required fields.');
            toast.error('Name and Customer Code are required fields.'); // Display error toast
            return;
        }

        // Call addCustomer function with the customer object
        const response = await addCustomer(customerData);

        console.log('Customer added successfully:', response);
        toast.success('Customer added successfully.'); // Display success toast
        // Clear form fields after successful submission
        setName('');
        setContactInformation('');
        setAddress('');
        setCustomerCode('');
    } catch (error) {
        console.error('Error adding customer:', error);
        toast.error('Error adding customer. Please try again.'); // Display error toast
    }
};


  return (
    <div className='mt-9 p-5 pr-10 pl-10 z-5 relative flex rounded-2xl bg-white bg-clip-border dark:bg-navy-800 dark:text-white dark:shadow-none flex-row items-center justify-between h-auto'>
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="flex mb-4">
          <div className="w-1/2 mr-2">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="mt-1 p-2 block w-full border focus:outline-none border-gray-300 rounded-md focus:ring-0 focus:border-gray-300 sm:text-sm" />
          </div>
          <div className="w-1/2 ml-2">
            <label htmlFor="contactInformation" className="block text-sm font-medium text-gray-700">Contact Information</label>
            <input type="number" id="contactInformation" value={contactInformation} onChange={(e) => setContactInformation(e.target.value)} className="mt-1 p-2 block w-full border focus:outline-none border-gray-300 rounded-md focus:ring-0 focus:border-gray-300 sm:text-sm" />
          </div>
        </div>
        <div className="flex mb-4">
          <div className="w-1/2 mr-2">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">email</label>
            <input type="email" id="address" value={address} onChange={(e) => setAddress(e.target.value)} className="mt-1 p-2 block w-full border focus:outline-none border-gray-300 rounded-md focus:ring-0 focus:border-gray-300 sm:text-sm" />
          </div>
          <div className="w-1/2 ml-2">
            <label htmlFor="customerCode" className="block text-sm font-medium text-gray-700">Customer Code</label>
            <input type="text" id="customerCode" value={customerCode} onChange={(e) => setCustomerCode(e.target.value)} className="mt-1 p-2 block w-full  border focus:outline-none border-gray-300 rounded-md focus:ring-0 focus:border-gray-300 sm:text-sm" />
          </div>
        </div>
        <button type="submit" className="bg-navy-800 text-white w-full py-2 px-4 rounded-full">Submit</button>
      </form>
      <ToastContainer /> {/* Add ToastContainer to render the toasts */}
    </div>
  );
};

export default NewCustomer;
