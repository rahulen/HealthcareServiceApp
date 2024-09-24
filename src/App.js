import React, { useState } from 'react';
import ServiceList from './ServiceList';
import AddServiceForm from './AddServiceForm';
import './App.css';

const App = () => {
  const [services, setServices] = useState([
    { id: 1, name: 'Consultation', description: 'General health consultation', price: 50 },
    { id: 2, name: 'Surgery', description: 'Minor surgery procedure', price: 300 },
  ]);

  const [editableService, setEditableService] = useState(null);

  const addService = (newService) => {
    if (editableService) {
      setServices(services.map(service =>
        service.id === editableService.id ? { ...newService, id: editableService.id } : service
      ));
      setEditableService(null); // Clear after editing
    } else {
      setServices([...services, { ...newService, id: services.length + 1 }]);
    }
  };

  const editService = (service) => {
    setEditableService(service); // Set the service to be edited
  };

  const deleteService = (id) => {
    setServices(services.filter(service => service.id !== id));
  };

  return (
    <div className="App">
      <h1>Healthcare Service Management</h1>
      <AddServiceForm addService={addService} editableService={editableService} />
      <ServiceList services={services} editService={editService} deleteService={deleteService} />
    </div>
  );
};

export default App;
