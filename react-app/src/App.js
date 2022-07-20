import React from 'react';
import { AuthContextProvider } from './contexts/AuthContext';
import './index.css';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import LoginPage from "./routes/LoginPage.js";
import RegisterPage from "./routes/RegisterPage.js";
import AddNewPostPage from './routes/AddNewPostPage';
import Main from './routes/MainPage';
import ContactsPage from './routes/ContactsPage';

function App() {
    return (
        <>  
            <div className='bg-[url("./img/bg.jpg")] bg-cover w-full h-[1000px] bg-center'>      
                <AuthContextProvider>
                    <Routes>
                        <Route path='/' element={<Main />} />
                        <Route path='/login' element={<LoginPage />} />
                        <Route path='/register' element={<RegisterPage />} />
                        <Route path='/new' element={<AddNewPostPage />} />
                        <Route path='/contacts' element={<ContactsPage />} />
                    </Routes>
                </AuthContextProvider>
            </div>
        </>
  )
}

export default App;