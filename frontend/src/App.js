import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import './App.css';
import axios from 'axios';

// Home component displays the home page with options to select robots
const Home = () => (
  <div className="container">
    <h1>Home</h1>
    <h2>Welcome to the control panel for the autonomous mobile robots in the Mezzanine Lab. Please select which robot you would like to connect to:</h2>
    <div className="robot-buttons">
      <button className="home-button">Robot1</button>
      <button className="home-button">Robot2</button>
    </div>
    <h3>Map:</h3>
    <img src="/MezzCAD.png" alt="Map" className="bottom-image"/>
  </div>
);

// Control component allows users to send commands to the robots and view additional functionalities
const Control = () => {
  const [showAdditionalFunctions, setShowAdditionalFunctions] = useState(false);

  // Handlers for sending commands to the backend API
  const handleGoAndCharge = () => {
    axios.post('http://0.0.0.0:5001/go_and_charge')
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  };

  const handleUndockAndArm = () => {
    axios.post('http://0.0.0.0:5001/undock_and_arm')
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  };

  const handleGoToRobotA = () => {
    axios.post('http://0.0.0.0:5001/go_to_robot_a')
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  };

  const handleGoToRobotB = () => {
    axios.post('http://0.0.0.0:5001/go_to_robot_b')
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  };

  const handleGoToRobotC = () => {
    axios.post('http://0.0.0.0:5001/go_to_robot_c')
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  };

  const handleGoToRobotD = () => {
    axios.post('http://0.0.0.0:5001/go_to_robot_d')
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  };

  const handleGoToLoading = () => {
    axios.post('http://0.0.0.0:5001/go_to_loading')
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  };

  const handleGoToDepot = () => {
    axios.post('http://0.0.0.0:5001/go_to_depot')
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  };

  // Handlers for showing and closing additional functions (e.g., camera feed)
  const handleShowAdditionalFunctions = () => {
    setShowAdditionalFunctions(true);
  };

  const closeAdditionalFunctions = () => {
    setShowAdditionalFunctions(false);
  };

  return (
    <div className="container">
      <h2>Control: insert robot name </h2>
      
      <div className="section">
        <h3>Utilities</h3>
        <button className="control-button" onClick={handleGoAndCharge}>Go and Charge</button>
        <button className="control-button" onClick={handleUndockAndArm}>Undock and Arm</button>
        <button className="control-button" onClick={handleShowAdditionalFunctions}>Connect to Camera Feed</button>
      </div>

      <div className="section">
        <h3>Docking Stations</h3>
        <button className="control-button" onClick={handleGoToRobotA}>Go to Robot A</button>
        <button className="control-button" onClick={handleGoToRobotB}>Go to Robot B</button>
        <button className="control-button" onClick={handleGoToRobotC}>Go to Robot C</button>
        <button className="control-button" onClick={handleGoToRobotD}>Go to Robot D</button>
        <button className="control-button" onClick={handleGoToLoading}>Go to Inspection</button>
        <button className="control-button" onClick={handleGoToDepot}>Go to Depot</button>
      </div>

      {showAdditionalFunctions && (
        <div className="additional-functions">
          <h3>Camera Feed</h3>
          <button className="control-button" onClick={closeAdditionalFunctions}>Close</button>
        </div>
      )}
      
      <div className="status-section">
        <h3>Status</h3>
        {<h4>Battery: </h4>}
        {<h4>Charging status: </h4>}
        <h4>Current position: </h4>
      </div>
    </div>
  );
};

// App component sets up the routing for the application
const App = () => (
  <Router>
    <div className="App">
      <nav>
        <ul>
          <li><NavLink to="/" end className={({ isActive }) => isActive ? 'active' : 'tab'}>Home</NavLink></li>
          <li><NavLink to="/control" className={({ isActive }) => isActive ? 'active' : 'tab'}>Control</NavLink></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/control" element={<Control />} />
      </Routes>
    </div>
  </Router>
);

export default App;
