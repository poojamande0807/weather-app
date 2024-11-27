import React, { useEffect } from "react";
import axios from "axios";
import { Card, Row, Col, Spinner } from "react-bootstrap";

const WeatherDashboard = ({ selectedCity, weatherData, setWeatherData }) => {
  const YOUR_API_KEY = "bcbfbcc013087de81a3d1019d2ccbd78";

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather`,
          {
            params: {
              q: selectedCity,
              appid: YOUR_API_KEY,
            },
          }
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error("something wrong :", error);
      }
    };

    fetchWeather();
  }, [selectedCity, setWeatherData]);

  if (!weatherData) {
    return (
      <div className="d-flex justify-content-center align-items-center loading-container">
        <Spinner animation="border" role="status" />
      </div>
    );
  }

  const iconUrl = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;

  return (
    <Card className="text-center mt-4 shadow-lg rounded weather-card">
      <Card.Header className="bg-primary text-white">
        <h5>Weather in {weatherData.name}</h5>
      </Card.Header>
      <Card.Body>
        <Row className="justify-content-center">
          <Col xs={12} sm={6} md={4}>
            <img
              src={iconUrl}
              alt={weatherData.weather[0].description}
              className="weather-icon mb-3"
            />
            <Card.Title className="display-4">
              {Math.round(weatherData.main.temp - 273.15)}°C
            </Card.Title>
            <Card.Text className="text-muted">
              {weatherData.weather[0].description}
            </Card.Text>
          </Col>
        </Row>
      </Card.Body>
      <Card.Footer className="text-muted">
        <Row>
          <Col>
            <h4>Humidity: {weatherData.main.humidity}%</h4>
          </Col>
          <Col>
            <h4>Wind: {weatherData.wind.speed} m/s</h4>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
};

export default WeatherDashboard;
