import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import useRef from './useRef/useRef';
import useRef_Timer from "./useRef/useRef_Timer";
import useReducer from './useReducer/useReducer';
import useEffect from './useEffect/useEffect';
import useMemo from './useMemo/useMemo.js';
function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" Component={HomePage}></Route>
          <Route path="/useReducer" Component={useReducer}></Route>
          <Route path="/useRef" Component={useRef}></Route>
          <Route path="/useRef_Timer" Component={useRef_Timer}></Route>
          <Route path="/useEffect" Component={useEffect}></Route>
          <Route path="/useMemo" Component={useMemo}></Route>
      </Routes>
    </Router>
  );
}

export default App;
