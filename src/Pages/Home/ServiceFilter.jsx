import React, { useState } from 'react';

const ServiceFilter = () => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const services = [
    {
      id: 1,
      name: 'Service 1',
      subServices: [
        { id: 11, name: 'Sub-Service 1.1' },
        { id: 12, name: 'Sub-Service 1.2' },
      ],
    },
    {
      id: 2,
      name: 'Service 2',
      subServices: [
        { id: 21, name: 'Sub-Service 2.1' },
        { id: 22, name: 'Sub-Service 2.2' },
        { id: 23, name: 'Sub-Service 2.3' },
        { id: 24, name: 'Sub-Service 2.4' },
      ],
    },
    {
      id: 3,
      name: 'Service 3',
      subServices: [
        { id: 31, name: 'Sub-Service 3.1' },
        { id: 32, name: 'Sub-Service 3.2' },
        { id: 33, name: 'Sub-Service 3.3' },
        { id: 34, name: 'Sub-Service 3.4' },
        { id: 35, name: 'Sub-Service 3.5' },
        { id: 36, name: 'Sub-Service 3.6' },
      ],
    },
    // Include data for the remaining services similarly
  ];

  const handleCheckboxChange = (serviceId) => {
    if (selectedServices.includes(serviceId)) {
      setSelectedServices(selectedServices.filter((id) => id !== serviceId));
    } else {
      setSelectedServices([...selectedServices, serviceId]);
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredServices = services.filter((service) => service.name.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <div style={{ marginRight: '20px' }}>
        <h2>Select Services:</h2>
        <input
          type="text"
          placeholder="Search services"
          value={searchQuery}
          onChange={handleSearchChange}
          style={{ marginBottom: '10px' }}
        />
        {filteredServices.map((service) => (
          <div key={service.id}>
            <label style={{ display: 'block', marginBottom: '10px' }}>
              <input
                type="checkbox"
                value={service.id}
                checked={selectedServices.includes(service.id)}
                onChange={() => handleCheckboxChange(service.id)}
              />
              {service.name}
            </label>
          </div>
        ))}
      </div>

      <div>
        <h2>Selected Services:</h2>
        {selectedServices.length > 0 ? (
          // Render cards based on selected services
          services
            .filter((service) => selectedServices.includes(service.id))
            .map((selectedService) => (
              <div key={selectedService.id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
                <h3>{selectedService.name}</h3>
                {selectedService.subServices && (
                  <ul>
                    {selectedService.subServices.map((subService) => (
                      <li key={subService.id}>{subService.name}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))
        ) : (
          <p>No services selected</p>
        )}
      </div>
    </div>
  );
};

export default ServiceFilter;
