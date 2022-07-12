import React from 'react';
import { AuthContextProvider } from './contexts/AuthContext';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./routes/LoginPage.js";
import RegisterPage from "./routes/RegisterPage.js";
import AddNewPostPage from './routes/AddNewPostPage';
import Main from './routes/MainPage';

function App() {
    return (
        <>        
        <div className='bg-[url("./img/bg.jpg")] bg-cover w-full h-[1000px] bg-center'>
            <AuthContextProvider>
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='/login' element={<LoginPage />} />
                    <Route path='/register' element={<RegisterPage />} />
                </Routes>
            </AuthContextProvider>
        </div>
        </>
  )
}

export default App;