import React, { useState } from "react";
import Modal from "./modal";

const Khata = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [buttonClicked, setButtonClicked] = useState("");

    const openModal = (type) => {
        setIsModalOpen(true);
        setButtonClicked(type);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleCredit = () => {
        openModal("credit");
    };

    const handleDebit = () => {
        openModal("debit");
    };

    const transactions =
        [
            {
                dateTime: "2024-03-16 09:00 AM",
                customerName: "John Doe",
                customerId: "12345",
                particulars: "Service",
                description: "Repair",
                reference: "REF001",
                amount: "$100",
                paidAmount: "$50",
                remainingAmount: "$50",
            },
            {
                dateTime: "2024-03-16 02:00 PM",
                customerName: "Jane Smith",
                customerId: "67890",
                particulars: "Product",
                description: "Electronics",
                reference: "REF002",
                amount: "$200",
                paidAmount: "$200",
                remainingAmount: "$0",
            },
            {
                dateTime: "2024-03-16 09:00 AM",
                customerName: "John Doe",
                customerId: "12345",
                particulars: "Service",
                description: "Repair",
                reference: "REF001",
                amount: "$100",
                paidAmount: "$50",
                remainingAmount: "$50",
            },
            {
                dateTime: "2024-03-16 02:00 PM",
                customerName: "Jane Smith",
                customerId: "67890",
                particulars: "Product",
                description: "Electronics",
                reference: "REF002",
                amount: "$200",
                paidAmount: "$200",
                remainingAmount: "$0",
            },
        ];

    return (
        <div className="mt-10">
            <div className="flex justify-between bg-white rounded-xl items-center p-3">
                <div className="flex">
                    <button onClick={handleDebit} className="bg-red-500 text-white rounded-xl p-2 mr-2">
                        Debit
                    </button>
                    <button onClick={handleCredit} className="bg-green-500 text-white rounded-xl p-2">Credit</button>
                </div>
                <div className="flex">
                    <div className="flex items-center">
                        <button className="bg-gray-900 text-white rounded-xl p-2 mr-2">
                            Cash in hand
                        </button>
                        {/* Button ek input window open kary ga. Te fer ody wich input kar k asi cash in hand show karna a. */}
                        <div className="bg-gray-600 rounded-xl p-2">10,000pkr</div>
                    </div>
                    <div className="ml-4">
                        <select className="bg-white border border-gray-300 rounded-xl p-2 focus:outline-none">
                            <option value="daily">Daily</option>
                            <option value="weekly">Weekly</option>
                            <option value="monthly">Monthly</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="mt-9 p-3 z-5 overflow-x-auto relative flex rounded-2xl bg-white bg-clip-border dark:bg-navy-800 dark:text-white dark:shadow-none flex-row items-center justify-between h-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-900 text-white">
                        <tr>
                            <th scope="cols" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Date & Time</th>
                            <th scope="cols" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Customer Name</th>
                            <th scope="cols" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Customer ID</th>
                            <th scope="cols" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Particulars</th>
                            <th scope="cols" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Description</th>
                            <th scope="cols" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Reference</th>
                            <th scope="cols" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Amount</th>
                            <th scope="cols" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Paid Amount</th>
                            <th scope="cols" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Remaining Amount</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                        {/* Mapping dummy data to table rows */}
                        {transactions.map((transaction, index) => (
                            <tr key={index}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm font-medium text-gray-700">
                                        {transaction.dateTime}
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm font-medium text-gray-700">
                                        {transaction.customerName}
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm font-medium text-gray-700">
                                        {transaction.customerId}
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm font-medium text-gray-700">
                                        {transaction.particulars}
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm font-medium text-gray-700">
                                        {transaction.description}
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm font-medium text-gray-700">
                                        {transaction.reference}
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm font-medium text-gray-700">
                                        {transaction.amount}
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm font-medium text-gray-700">
                                        {transaction.paidAmount}
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm font-medium text-gray-700">
                                        {transaction.remainingAmount}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal} buttonClicked={buttonClicked} />
        </div>
    );
};

export default Khata;