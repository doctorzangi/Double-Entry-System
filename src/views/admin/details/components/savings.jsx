// 

import React, { useState } from 'react';

const Savings = () => {
  // Sample data for savings goals
  const [goals, setGoals] = useState([
    { id: 1, name: 'Vacation', targetAmount: 2000, savedAmount: 500 },
    { id: 2, name: 'Emergency Fund', targetAmount: 5000, savedAmount: 2000 },
    { id: 3, name: 'New Car', targetAmount: 10000, savedAmount: 1000 },
    // Add more goals as needed
  ]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold mb-4">Savings Goals</h2>
      {goals.map(goal => (
        <div key={goal.id} className="bg-gray-100 p-4 rounded-lg mb-4">
          <h3 className="text-lg font-semibold mb-2">{goal.name}</h3>
          <p className="text-sm mb-2">Target Amount: ${goal.targetAmount}</p>
          <p className="text-sm mb-2">Saved Amount: ${goal.savedAmount}</p>
          <div className="bg-blue-200 h-3 w-full rounded-lg mb-2">
            <div className="bg-blue-500 h-full rounded-lg" style={{ width: `${(goal.savedAmount / goal.targetAmount) * 100}%` }}></div>
          </div>
          <p className="text-sm">Progress: {Math.round((goal.savedAmount / goal.targetAmount) * 100)}%</p>
        </div>
      ))}
    </div>
  );
};

export default Savings;
