import React from 'react';
import logo from '../logo.svg';

export default function Landing() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
         
          <a
            className="App-link"
            href="https://github.com/MuhammadAbbasAkhtar/react-app-boilerplate"
            target="_blank"
            rel="noopener noreferrer"
          >
            ReactJS Boilerplate
          </a>
        </header>
      </div>
    );
  }
