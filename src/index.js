import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SendToDeptHeadForm from './SendToDeptHeadForm';
import DeptHead from "./DepHeadHomePage"
import MakePayment from './MakePayment';
import ViewPaymentRequest from './ViewPaymentRequest';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/SendToDeptHeadForm" element={<SendToDeptHeadForm />} />
    <Route path="/DepHeadHomePage" element={<DeptHead />} />
    <Route path="/MakePayment" element={<MakePayment />} />
    <Route path="/ViewPaymentRequest" element={<ViewPaymentRequest />} />
    <Route path="/" element={<App />} />
  </Routes>
</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
