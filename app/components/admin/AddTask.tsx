import React, { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Block } from 'konsta/react';
import toast from "react-hot-toast";

const AddTask = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    company: '',
    price: 0,
    telegramChannel: '',
    telegramGroup: '',
    facebook: '',
    web: '',
    instagram: '',
    twitter: '',
    linkedin: '',
  });

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: name === 'price' ? parseFloat(value) || 0 : value,
    });
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/task', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to add task');
      }

      dispatch({ type: 'addTask', payload: formData });
      setFormData({
        company: '',
        price: 0,
        telegramChannel: '',
        telegramGroup: '',
        facebook: '',
        web: '',
        instagram: '',
        twitter: '',
        linkedin: '',
      });
      toast.success('Task added successfully!');
    } catch (error) {
      toast.error('Failed to add task');
    }
  };

  return (
    <Block className="p-4">
      <h1 className="text-2xl font-bold mb-4">Add Task</h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block mb-1">Company Name:</label>
          <input
            type="text"
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
            name="company"
            value={formData.company}
            onChange={handleFormChange}
          />
        </div>
        <div>
          <label className="block mb-1">Telegram Channel:</label>
          <input
            type="text"
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
            name="telegramChannel"
            value={formData.telegramChannel}
            onChange={handleFormChange}
          />
        </div>
        <div>
          <label className="block mb-1">Telegram Group:</label>
          <input
            type="text"
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
            name="telegramGroup"
            value={formData.telegramGroup}
            onChange={handleFormChange}
          />
        </div>
        <div>
          <label className="block mb-1">Facebook:</label>
          <input
            type="text"
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
            name="facebook"
            value={formData.facebook}
            onChange={handleFormChange}
          />
        </div>
        <div>
          <label className="block mb-1">Web:</label>
          <input
            type="text"
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
            name="web"
            value={formData.web}
            onChange={handleFormChange}
          />
        </div>
        <div>
          <label className="block mb-1">Instagram:</label>
          <input
            type="text"
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
            name="instagram"
            value={formData.instagram}
            onChange={handleFormChange}
          />
        </div>
        <div>
          <label className="block mb-1">Twitter:</label>
          <input
            type="text"
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
            name="twitter"
            value={formData.twitter}
            onChange={handleFormChange}
          />
        </div>
        <div>
          <label className="block mb-1">LinkedIn:</label>
          <input
            type="text"
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
            name="linkedin"
            value={formData.linkedin}
            onChange={handleFormChange}
          />
        </div>
        <div>
          <label className="block mb-1">Price:</label>
          <input
            type="number"
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
            name="price"
            value={formData.price}
            onChange={handleFormChange}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Add Task
        </button>
      </form>
    </Block>
  );
};

export default AddTask;
