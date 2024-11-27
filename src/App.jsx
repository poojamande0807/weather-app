import React, { useState, useEffect } from "react";
import CityList from "./components/CityList";
import WeatherDashboard from "./components/WeatherDashboard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "./App.css";

const App = () => {
  const [selectedCity, setSelectedCity] = useState("Ho Chi Minh");
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const savedCity = localStorage.getItem("selectedCity") || "Ho Chi Minh";
    setSelectedCity(savedCity);
  }, []);

  useEffect(() => {
    localStorage.setItem("selectedCity", selectedCity);
  }, [selectedCity]);

  return (
    <div className="App">
      <h1> Weather App </h1>

      <Container className="mt-5">
        <Row>
          <Col md={4}>
            <Card>
              <Card.Body>
                <h5>Select a City</h5>
                <CityList
                  selectedCity={selectedCity}
                  setSelectedCity={setSelectedCity}
                />
              </Card.Body>
            </Card>
          </Col>

          <Col md={8}>
            <WeatherDashboard
              selectedCity={selectedCity}
              weatherData={weatherData}
              setWeatherData={setWeatherData}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
