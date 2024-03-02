import React, { useState, useEffect } from 'react';
import HeaderLinks from './components/headerlinks';
import CustomerList from './components/customerlist';
import Overview from './components/overview';
import TransactionHistory from './components/transactionhistory';
import Data from './components/data';
import Links from './components/links';
import NewCustomer from './components/newcustomer';
import NewTransaction from './components/newtransaction';

const Accounts = () => {
    const [showOverview, setShowOverview] = useState(true); // Set to true initially
    const [showCustomerList, setShowCustomerList] = useState(false);
    const [showTransactionHistory, setShowTransactionHistory] = useState(false);
    const [showData, setShowData] = useState(false);
    const [showLinks, setShowLinks] = useState(false);
    const [showNewCustomer, setShowNewCustomer] = useState(false);
    const [showNewTransaction, setShowNewTransaction] = useState(false);

    useEffect(() => {
        // Any additional initialization code can be placed here
    }, []); // Empty dependency array means this effect will run once after the initial render

    const showOverView = () => {
        setShowOverview(true);
        setShowCustomerList(false);
        setShowTransactionHistory(false);
        setShowData(false);
        setShowLinks(false);
        setShowNewCustomer(false);
        setShowNewTransaction(false);
    };

    const showCustomerlist = () => {
        setShowCustomerList(true);
        setShowTransactionHistory(false);
        setShowOverview(false);
        setShowData(false);
        setShowLinks(false);
        setShowNewCustomer(false);
        setShowNewTransaction(false);
    };
    const showTransactionhistory = () => {
        setShowTransactionHistory(true);
        setShowCustomerList(false);
        setShowOverview(false);
        setShowData(false);
        setShowLinks(false);
        setShowNewCustomer(false);
        setShowNewTransaction(false);
    };
    const showdata = () => {
        setShowData(true);
        setShowTransactionHistory(false);
        setShowCustomerList(false);
        setShowOverview(false);
        setShowLinks(false);
        setShowNewCustomer(false);
        setShowNewTransaction(false);
    };
    const showlinks = () => {
        setShowLinks(true);
        setShowTransactionHistory(false);
        setShowCustomerList(false);
        setShowOverview(false);
        setShowData(false);
        setShowNewCustomer(false);
        setShowNewTransaction(false);
    };
    const showNewcustomer = () => {
        setShowNewCustomer(true);
        setShowLinks(false);
        setShowTransactionHistory(false);
        setShowCustomerList(false);
        setShowOverview(false);
        setShowData(false);
        setShowNewTransaction(false);
    };
    const showNewtransaction = () => {
        setShowNewTransaction(true);
        setShowLinks(false);
        setShowTransactionHistory(false);
        setShowCustomerList(false);
        setShowOverview(false);
        setShowData(false);
        setShowNewCustomer(false);
    };

    return (
        <div>
            <HeaderLinks showOverview={showOverView} showCustomerList={showCustomerlist} showTransactionHistory={showTransactionhistory} showData={showdata} showLinks={showlinks} />
            <div>
                {showOverview && <Overview />}
                {showCustomerList && <CustomerList />}
                {showTransactionHistory && <TransactionHistory />}
                {showData && <Data />}
                {showLinks && <Links showNewCustomer={showNewcustomer} showNewTransaction={showNewtransaction} />}
                {showNewCustomer && <NewCustomer />}
                {showNewTransaction && <NewTransaction />}
            </div>
        </div>
    );
};

export default Accounts;
