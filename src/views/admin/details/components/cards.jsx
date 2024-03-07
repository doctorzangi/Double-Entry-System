import React from 'react';

const Cards = ({ showComponent, active }) => {
  return (
    <div className="mt-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      <a
        className={`card rounded-xl bg-white text-black cursor-pointer text-center p-4 block ${active ? 'active' : ''}`}
        onClick={() => showComponent('Wallet')}
      >
        My Wallet
      </a>
      <a
        className={`card rounded-xl bg-white text-black text-center cursor-pointer p-4 block ${active ? 'active' : ''}`}
        onClick={() => showComponent('History')}
      >
        Transaction History
      </a>
      <a
        className={`card rounded-xl bg-white text-black text-center cursor-pointer p-4 block ${active ? 'active' : ''}`}
        onClick={() => showComponent('Investments')}
      >
        Investments
      </a>
      <a
        className={`card rounded-xl bg-white text-black text-center cursor-pointer p-4 block ${active ? 'active' : ''}`}
        onClick={() => showComponent('Loans')}
      >
        Loans
      </a>
      <a
        className={`card rounded-xl bg-white text-black text-center cursor-pointer p-4 block ${active ? 'active' : ''}`}
        onClick={() => showComponent('Savings')}
      >
        Savings
      </a>
      <a
        className={`card rounded-xl bg-white text-black text-center p-4 cursor-pointer block ${active ? 'active' : ''}`}
        onClick={() => showComponent('Services')}
      >
        Services
      </a>
    </div>
  );
};

export default Cards;
