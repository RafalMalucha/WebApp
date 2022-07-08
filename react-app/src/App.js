import React, {useEffect, useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AddPost from './components/AddPost';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Home from './pages/Home';
import './index.css';
import { AuthContextProvider } from './contexts/AuthContext';
import Register from './components/SignUp';

function App() {
    return (
    <AuthContextProvider>
        <div className='App'>
            <Navbar />
            <Register />
        </div>
    </AuthContextProvider>
  )
}

export default App