import React from 'react'
import Navbar from '../components/Navbar'
import Login from '../components/SignIn'

const LoginPage = () => {
  return (
    <>
        <Navbar />
        <div class='hero min-h-screen bg-[url("./img/bg.jpg")] mx-auto w-min-full'>
            <Login />
        </div>
        <div class='footer p-10 mb-[-10px] bg-accent text-black'>

        </div>
    </>
  )
}

export default LoginPage