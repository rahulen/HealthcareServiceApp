import React from 'react';

const ServiceList = ({ services, editService, deleteService }) => (
  <div>
    <h2>Service List</h2>
    <ul>
      {services.map(service => (
        <li key={service.id}>
          <strong>{service.name}</strong>: {service.description} - ${service.price}
          <button onClick={() => editService(service)}>Edit</button>
          <button className="delete" onClick={() => deleteService(service.id)}>Delete</button>
        </li>
      ))}
    </ul>
  </div>
);

export default ServiceList;
