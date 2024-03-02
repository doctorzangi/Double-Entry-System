import React from 'react';

const HeaderLinks = ({ showCustomerList, showOverview, showTransactionHistory, showData, showLinks }) => {
    return (
        <div className="mt-9 p-5 pr-10 pl-10 z-5 relative flex rounded-2xl bg-white bg-clip-border dark:bg-navy-800 dark:text-white dark:shadow-none flex-row items-center justify-between h-16">
            <a className="flex items-center space-x-2 cursor-pointer" onClick={showOverview}>
                <span className='bold text-brandLinear'>Overview</span>
            </a>
            <a className="flex items-center space-x-2 cursor-pointer" onClick={showCustomerList}>
                <span className='bold text-brandLinear'>Customers List</span>
            </a>
            <a className="flex items-center space-x-2 cursor-pointer" onClick={showTransactionHistory} >
                <span className='bold text-brandLinear'>Transactions</span>
            </a>
            <a className="flex items-center space-x-2 cursor-pointer" onClick={showData}>
                <span className='bold text-brandLinear'>Data</span>
            </a>
            <a className="flex items-center space-x-2 cursor-pointer" onClick={showLinks}>
                <span className='bold text-brandLinear'>Useful Links</span>
            </a>
        </div>
    );
};

export default HeaderLinks;
