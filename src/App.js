import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import useRef from './useRef/useRef';
import useReducer from './useReducer/useReducer';
import useEffect from './useEffect/useEffect';

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" Component={HomePage}></Route>
          <Route path="/useReducer" Component={useReducer}></Route>
          <Route path="/useRef" Component={useRef}></Route>
          <Route path="/useEffect" Component={useEffect}></Route>
      </Routes>
    </Router>
  );
}

export default App;
