import React from "react";
import { Form } from "react-bootstrap";

const CityList = ({ selectedCity, setSelectedCity }) => {
  const cities = [
    "Ho Chi Minh",
    "Singapore",
    "Kuala Lumpur",
    "Tokyo",
    "Athens",
  ];

  return (
    <Form.Group controlId="citySelect">
      <Form.Control
        as="select"
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.target.value)}
        className="mb-3"
      >
        {cities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </Form.Control>
    </Form.Group>
  );
};

export default CityList;
