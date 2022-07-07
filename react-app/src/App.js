import React, {useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AddPost from './components/AddPost';
import './index.css';

const App = () => {
  return (
    <div>
        <Navbar />
    </div>
  )
}

export default App