import React, { useState } from "react";


const Overview = () => {
  const [showBalanceSheet, setShowBalanceSheet] = useState(false);
  const [showIncomeStatement, setShowIncomeStatement] = useState(false);
  const [showCashFlowStatement, setShowCashFlowStatement] = useState(false);
  const [showProfitLossStatement, setShowProfitLossStatement] = useState(false);

  return (
    <div className="container mx-auto">
      <h1 className="mt-9 text-3xl font-bold mb-4 text-gray-700">Financial Reporting</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Balance Sheet */}
        <div className="cursor-pointer" onClick={() => setShowBalanceSheet(!showBalanceSheet)}>
          <div className="p-4 bg-white shadow-md rounded-lg mb-4">
            <h2 className="text-xl font-semibold mb-2 text-gray-700">Balance Sheet</h2>
            {/* Balance Sheet Content */}
            {showBalanceSheet && (
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-900">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                      Account
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                      Amount ($)
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-700">Cash</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-700">$100,000</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-700">Accounts Receivable</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-700">$50,000</td>
                  </tr>
                  {/* Add more rows as needed */}
                </tbody>
              </table>
            )}
          </div>
        </div>

        {/* Income Statement */}
        <div className="cursor-pointer" onClick={() => setShowIncomeStatement(!showIncomeStatement)}>
          <div className="p-4 bg-white shadow-md rounded-lg mb-4">
            <h2 className="text-xl font-semibold mb-2 text-gray-700">Income Statement</h2>
            {/* Income Statement Content */}
            {showIncomeStatement && (
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-900">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                      Category
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                      Amount ($)
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-700">Sales Revenue</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-700">$150,000</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-700">Cost of Goods Sold</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-700">$60,000</td>
                  </tr>
                  {/* Add more rows as needed */}
                </tbody>
              </table>
            )}
          </div>
        </div>

        {/* Cash Flow Statement */}
        <div className="cursor-pointer" onClick={() => setShowCashFlowStatement(!showCashFlowStatement)}>
          <div className="p-4 bg-white shadow-md rounded-lg mb-4">
            <h2 className="text-xl font-semibold mb-2 text-gray-700">Cash Flow Statement</h2>
            {/* Cash Flow Statement Content */}
            {showCashFlowStatement && (
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-900">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                      Activity
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                      Amount ($)
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-700">Operating Activities</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-700">$70,000</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-700">Investing Activities</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-700">-$20,000</td>
                  </tr>
                  {/* Add more rows as needed */}
                </tbody>
              </table>
            )}
          </div>
        </div>

        {/* Profit and Loss Statement */}
        <div className="cursor-pointer" onClick={() => setShowProfitLossStatement(!showProfitLossStatement)}>
          <div className="p-4 bg-white shadow-md rounded-lg mb-4">
            <h2 className="text-xl font-semibold mb-2 text-gray-700">Profit and Loss Statement</h2>
            {/* Profit and Loss Statement Content */}
            {showProfitLossStatement && (
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-900">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-white">
                      Category
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-white">
                      Amount ($)
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-700">Total Revenue</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-700">$150,000</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-700">Total Expenses</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-700">-$90,000</td>
                  </tr>
                  {/* Add more rows as needed */}
                </tbody>
              </table>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Overview;
