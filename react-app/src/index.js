import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./routes/LoginPage.js";
import RegisterPage from "./routes/RegisterPage.js";
import AddNewPostPage from './routes/AddNewPostPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
);