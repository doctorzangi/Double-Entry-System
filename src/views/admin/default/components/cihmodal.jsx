import React, { useState } from "react";

const CIHModal = ({ isOpen, onClose, handleInputChange }) => {
  const [cashInHand, setCashInHand] = useState("");

  const handleChange = (e) => {
    setCashInHand(e.target.value);
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
      <div className="z-10 bg-white p-6 rounded-xl">
        <label htmlFor="cashInHand" className="block mb-2">
          Cash in Hand
        </label>
        <input
          type="number"
          id="cashInHand"
          className="border border-gray-300 rounded-md p-2 w-full"
          value={cashInHand}
          onChange={handleChange}
        />
        <div className="mt-4 flex justify-end">
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-md"
            onClick={() => {
              handleInputChange(cashInHand);
              onClose();
            }}
          >
            Save
          </button>
          <button
            className="ml-2 bg-gray-500 text-white px-4 py-2 rounded-md"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default CIHModal;
