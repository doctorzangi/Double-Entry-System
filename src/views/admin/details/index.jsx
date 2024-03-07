import React, { useState } from 'react';
import Cards from './components/cards';
import History from './components/history';
import Wallet from './components/wallet';
import Investments from './components/investments';
import Loans from './components/loans';
import Savings from './components/savings';
import Services from './components/services';

const Details = () => {
  const [activeComponent, setActiveComponent] = useState('Cards');

  const showComponent = (component) => {
    setActiveComponent(component);
  };

  return (
    <div>
      <Cards showComponent={showComponent} active={activeComponent === 'Cards'} />
      <div>
        {activeComponent === 'Wallet' && <Wallet />}
        {activeComponent === 'History' && <History />}
        {activeComponent === 'Investments' && <Investments />}
        {activeComponent === 'Loans' && <Loans />}
        {activeComponent === 'Savings' && <Savings />}
        {activeComponent === 'Services' && <Services />}
      </div>
    </div>
  );
};

export default Details;
