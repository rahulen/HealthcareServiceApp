import React, { useState, useEffect } from 'react';

const AddServiceForm = ({ addService, editableService }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    if (editableService) {
      setName(editableService.name);
      setDescription(editableService.description);
      setPrice(editableService.price);
    }
  }, [editableService]);

  const handleSubmit = (e) => {
    e.preventDefault();
    addService({ name, description, price: Number(price) });
    setName('');
    setDescription('');
    setPrice('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{editableService ? 'Edit Service' : 'Add New Service'}</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Description:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Price:</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>
      <button type="submit">{editableService ? 'Update' : 'Add'} Service</button>
    </form>
  );
};

export default AddServiceForm;
