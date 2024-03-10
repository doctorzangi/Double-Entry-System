import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Savings = () => {
  const [goals, setGoals] = useState([
    { id: 1, name: 'Vacation', targetAmount: 2000, savedAmount: 500 },
    { id: 2, name: 'Emergency Fund', targetAmount: 5000, savedAmount: 2000 },
    { id: 3, name: 'New Car', targetAmount: 10000, savedAmount: 1000 },
  ]);

  const [amountToAdd, setAmountToAdd] = useState(0);

  const handleAddAmount = (goalId) => {
    const goal = goals.find(goal => goal.id === goalId);
    const newSavedAmount = goal.savedAmount + amountToAdd;

    if (newSavedAmount > goal.targetAmount) {
      toast.error(`Can't add more than target amount!`);
      return;
    }

    setGoals(goals.map(goal => {
      if (goal.id === goalId) {
        return {
          ...goal,
          savedAmount: newSavedAmount
        };
      }
      return goal;
    }));
    setAmountToAdd(0); // Reset input field after adding
    toast.success(`Successfully added $${amountToAdd} to ${goal.name}.`);
  };

  const handleRemoveAmount = (goalId) => {
    const goal = goals.find(goal => goal.id === goalId);
    const newSavedAmount = goal.savedAmount - amountToAdd;

    if (newSavedAmount < 0) {
      toast.error(`Can't remove more than saved amount!`);
      return;
    }

    setGoals(goals.map(goal => {
      if (goal.id === goalId) {
        return {
          ...goal,
          savedAmount: newSavedAmount
        };
      }
      return goal;
    }));
    setAmountToAdd(0); // Reset input field after removing
    toast.success(`Successfully removed $${amountToAdd} from ${goal.name}.`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold mb-4">Savings Goals</h2>
      <ToastContainer />
      {goals.map(goal => (
        <div key={goal.id} className="bg-white p-4 rounded-xl mb-4">
          <h3 className="text-lg font-semibold mb-2">{goal.name}</h3>
          <p className="text-sm mb-2">Target Amount: ${goal.targetAmount}</p>
          <p className="text-sm mb-2">Saved Amount: ${goal.savedAmount}</p>
          <div className="bg-blue-200 h-3 w-full rounded-lg mb-2">
            <div className="bg-blue-500 h-full rounded-lg" style={{ width: `${Math.min((goal.savedAmount / goal.targetAmount) * 100, 100)}%` }}></div>
          </div>
          <p className="text-sm">Progress: {Math.round((goal.savedAmount / goal.targetAmount) * 100)}%</p>
          <div className='flex items-center justify-between'>
            <input
              type="number"
              value={amountToAdd}
              onChange={(e) => setAmountToAdd(parseInt(e.target.value))}
              className="mt-1 p-2 block border focus:outline-none border-gray-300 rounded-md focus:ring-0 focus:border-gray-300 sm:text-sm"
            />
            <div>
              <button onClick={() => handleRemoveAmount(goal.id)} className="bg-red-500 text-white px-4 py-2 rounded-md">Remove Amount</button>
              <button onClick={() => handleAddAmount(goal.id)} className="bg-gray-900 text-white px-4 py-2 rounded-md ml-2">Add Amount</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Savings;
