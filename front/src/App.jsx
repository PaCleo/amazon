import React from 'react';
import './App.css';
import Header from './Header/Header';
import Home from './Home/Home';
import Checkout from './Checkout/Checkout';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './Login/Login';
import Register from './Register/Register';
import Payment from './Payment/Payment';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>

          <Route path='/register' element={<Register />}/>

          <Route path='/login' element={<Login />}/>

          <Route path='/checkout' element={[<Header />,<Checkout />]}/>

          <Route path='/payment' element={[<Header />,<Payment />]}/>

          <Route path="/" element={[<Header />,<Home />]}/>

        </Routes>
      </div>
    </Router>
  );
}

export default App;
