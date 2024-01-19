// Modal.js
import React, { useState } from 'react';

const Modal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={openModal} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Open Modal
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg w-1/2">
            <div className="flex flex-col items-center">
              <img
                src="https://via.placeholder.com/150" // Replace with your image URL
                alt="Card Image"
                className="mb-4 rounded-full"
              />
              <p className="text-xl font-bold mb-2">Card Title</p>
              <p className="text-gray-600">Card Subtitle or Description</p>
            </div>
            <button onClick={closeModal} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 mt-4 rounded">
              Close Modal
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
