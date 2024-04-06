import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import useRef from './useRef/useRef';
import useReducer from './useReducer/useReducer';

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/useReducer" Component={useReducer}></Route>
        <Route path="/useRef" Component={useRef}></Route>
      </Routes>
    </Router>
  );
}

export default App;
