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
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/new' element={<AddNewPostPage />} />
        </Routes>
    </BrowserRouter>,
);