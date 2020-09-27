import React from 'react';
import './App.css';
import Row from './components/Row';

function App() {
  return (
    <React.Fragment>
      <h1>Hello from APP</h1>
      {/* Row Component */}

      <Row title='NETFLIX ORIGINALS'></Row>
      <Row title='Trending Now'></Row>
    </React.Fragment>
  );
}

export default App;
