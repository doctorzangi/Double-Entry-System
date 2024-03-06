import { useEffect } from "react";
import React, {useState} from 'react';
import { customerList } from "services/customerService";


const CustomerList = () => {
    const [customers, setCustomers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
  
    useEffect(() => {
      // setIsLoading(true);
      // setError(null);
  
      // console.log(fetchAllBooks())
  
      customerList()
        .then(fetchedCustomers => {
          console.log(fetchedCustomers)
          setCustomers(fetchedCustomers);
        })
        .catch(fetchError => {
          setError(fetchError);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }, []);
  return (
    <div className='mt-9 p-5 pr-10 pl-10 z-5 relative flex rounded-2xl bg-white bg-clip-border dark:bg-navy-800 dark:text-white dark:shadow-none flex-row items-center justify-between h-auto'>
      <table className="min-w-full divide-y rounded-xl divide-gray-200">
        <thead className="bg-gray-900 dark:bg-gray-900">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
              ID
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
              Name
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
              Contact Info
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
              Address
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
              Credited Amount
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
              Debited Amount
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
              Balance
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
          {customers.map(customer => (
            <tr key={customer.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-700">{customer.customer.customer_code}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-700">{customer.customer.name}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-700">{customer.customer.contact_information}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-700">{customer.customer.address}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-700">{customer.total_credit}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-700">{customer.total_debit}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-700">{customer.total_credit - customer.total_debit}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerList;