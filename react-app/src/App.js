import React, {useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AddPost from './components/AddPost';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Home from './pages/Home';
import './index.css';
import { AuthContextProvider } from './components/context/AuthContext';

const App = () => {
  return (
    <div>
        <Navbar />
        <SignUp />
    </div>
  )
}

export default App